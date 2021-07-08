const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User, Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /user
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

module.exports = router;