const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { Op } = require('sequelize');
const { User, Post, Image, Comment } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /user
    // console.log(req.headers); // 쿠키확인
    try {
        if (req.user) { // 로그인 상태에서만
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'], // attributes를 사용하면 특정 정보만 가져옴
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            });
            res.status(200).json(fullUserWithoutPassword);
        } else {
            res.status(200).json(null);
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/followers', isLoggedIn, async (req, res, next) => { // GET /user/followers
    try {
        const user = await User.findOne({ where: {id: req.user.id}}); // 자신을 먼저 찾음
        if (!user) {
            res.status(403).send('팔로워가 없습니다.');
        }
        const followers = await user.getFollowers({
            limit: parseInt(req.query.limit, 10),
        });
        res.status(200).json(followers);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/followings', isLoggedIn, async (req, res, next) => { // GET /user/followings
    try {
        const user = await User.findOne({ where: {id: req.user.id}}); // 자신을 먼저 찾음
        if (!user) {
            res.status(403).send('팔로잉이 없습니다.');
        }
        const followings = await user.getFollowings({
            limit: parseInt(req.query.limit, 10),
        });
        res.status(200).json(followings);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// params는 와일드카드라고도 부르는데 먼저 나오면안 되고 아래에 있어야 404 에러가 안뜸
router.get('/:userId', async (req, res, next) => { // GET /user/1
    try {
        const fullUserWithoutPassword = await User.findOne({
            where: { id: req.params.userId },
            attributes: {
                exclude: ['password']
            },
            include: [{
                model: Post,
                attributes: ['id'], // attributes를 사용하면 특정 정보만 가져옴
            }, {
                model: User,
                as: 'Followings',
                attributes: ['id'],
            }, {
                model: User,
                as: 'Followers',
                attributes: ['id'],
            }]
        });
        if(fullUserWithoutPassword){
            const data = fullUserWithoutPassword.toJSON();
            data.Posts = data.Posts.length; // 개인정보침해 예방
            data.Followers = data.Followers.length;
            data.Followings = data.Followings.length;
            res.status(200).json(data);
        } else {
            res.status(404).json('존재하지 않는 사용자입니다.'); // 없는 userId
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/:userId/posts', async (req, res, next) => { // GET /user/1/posts
    try {
        const where = { UserId: req.params.userId };
        if (parseInt(req.query.lastId, 10)) { // 초기로딩이 아닐 때
            where.id = { [Op.lt]: parseInt(req.query.lastId, 10)} // lastId보다 작은것 불러오기
        } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 
        const posts = await Post.findAll({
            where,
            limit: 10, // 10개만 가져오기 스크롤 내리면 10개 씩 가져옴
            order: [
                ['createdAt', 'DESC'], // ASC가 기본, 최신글 순 DESC
                [Comment, 'createdAt', 'DESC']
            ], 
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            }, {
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                    order: [['createdAt', 'DESC']],
                }],
            }, {
                model: User, // 좋아요 누른 사람
                as: 'Likers',
                attributes: ['id'],
            }, {
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: Image,
                }]
            }],
            // offset: 0, // 1~10 offset이 10이면 11~20 중간빠지면 오류나고 하는 치명적인 단점때문에 lastId를씀 
        });
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => { // 서버에러, 성공객체, info
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason); // 401 로그인 잘못됐을 때
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            })
            return res.status(200).json(fullUserWithoutPassword );
        });
    })(req, res, next);
}); 

router.post('/', isNotLoggedIn, async (req, res, next) => { // POST /user
   try {
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (exUser) { // 200 성공, 300 리다이렉트, 400 클라이언트 에러, 500 서버 에러
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        await User.create({ // create이 데이터를 넣어줌
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3060')
        res.status(201).send('ok');
    } catch (error) {
        console.error(error);
        next(error); // status 500
    }
});

router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
});

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
    try {  
        await User.update({
            nickname: req.body.nickname,
        }, {
            where: { id: req.user.id },
        });
        res.status(200).json({ nickname: req.body.nickname }); // 닉네임 업데이트
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => { // PATCH /user/1/follow
    try {
        const user = await User.findOne({ where: {id: req.params.userId}});
        if (!user) {
            res.status(403).send('존재하지 않는 회원을 팔로우할 수 없습니다.'); // 403 금지
        }
        await user.addFollowers(req.user.id);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => { // DELETE /user/1/follow
    try {
        const user = await User.findOne({ where: {id: req.params.userId}}); // 그 사람을 찾고
        if (!user) {
            res.status(403).send('존재하지 않는 회원을 언팔로우할 수 없습니다.');
        }
        await user.removeFollowers(req.user.id);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/follower/:userId', isLoggedIn, async (req, res, next) => { // DELETE /user/follower/2
    try {
        const user = await User.findOne({ where: {id: req.params.userId}});
        if (!user) {
            res.status(403).send('존재하지 않는 회원을 차단할 수 없습니다.');
        }
        await user.removeFollowings(req.user.id);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;