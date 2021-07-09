const express = require('express');
// node에서는 웹팩을 안쓰므로 import -> require, export default -> module.exports
const multer = require('multer');
const path = require('path'); // 노드에서 http처럼 제공 (설치x)
const fs = require('fs'); // 파일시스템 조작

const { Post, Image, Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');

// 라우터로 분리
const router = express.Router();

try {
    fs.accessSync('uploads'); // uploads 폴더 있는지 확인
} catch (error) {
    console.log('uploads 폴더가 없으므로 생성합니다.');
    fs.mkdirSync('uploads');
}

router.post('/', isLoggedIn, async (req, res, next) => { // POST /post
    try {
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id,
        });
        const fulPost = await Post.findOne({
            where: { id: post.id },
            include: [{
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User, // 댓글 작성자
                    attributes: ['id', 'nickname'],
                }],
            }, {
                model: User, // 게시글 작성자
                attributes: ['id', 'nickname'],
            }, {
                model: User, // 좋아요 누른 사람
                as: 'Likers',
                attributes: ['id'],
            }]
        });
        res.status(201).json(fulPost);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

const upload = multer({
    storage: multer.diskStorage({ // 실습시에만 하드디스크에 AWS S3로 대체
        destination(req, file, done) {
            done(null, 'uploads');
        },
        filename(req, file, done) { // 이안.png
            const ext = path.extname(file.originalname); // 확장자 추출(.png)
            const basename = path.basename(file.originalname, ext); // 이안
            done(null, basename + new Date().getTime() + ext); // 이안1593401932412.png
        },
    }),
    limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});

// upload.single 사진한장 array 여러장 none 텍스트,json fields 파일2개이상 있을때
router.post('/images', isLoggedIn, upload.array('image'), (req, res, next) => { // POST /post/images
    console.log(req.files);
    res.json(req.files.map((v) => v.filename));
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => { // POST /post/1/comment
    try {
        const post = await Post.findOne({
            where: {id: req.params.postId}
        });
        if (!post) {
            return res.status(403).send('존재하지 않는 게시글입니다.');
        }
        const comment = await Comment.create({
            content: req.body.content,
            PostId: parseInt(req.params.postId, 10),
            UserId: req.user.id,
        })
        const fullComment = await Comment.findOne({
            where: { id: comment.id },
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            }],
        })
        res.status(201).json(fullComment);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => { // PATCH /post/1/like
    try {
        const post = await Post.findOne({ where: { id: req.params.postId }});
        if (!post) {
            return res.status(403).send('게시글이 존재하지 않습니다.')
        }
        await post.addLikers(req.user.id);
        res.json({ postId: post.id, UserId: req.user.id });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/:postId/like', isLoggedIn, async (req, res, next) => { // DELETE /post/1/like
    try {
        const post = await Post.findOne({ where: { id: req.params.postId }});
        if (!post) {
            return res.status(403).send('게시글이 존재하지 않습니다.')
        }
        await post.removeLikers(req.user.id);
        res.json({ postId: post.id, UserId: req.user.id });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/:postId', isLoggedIn, async (req, res, next) => { // DELETE /post/10
    try {
        await Post.destroy({
            where: { 
                id: req.params.postId, // 게시글아이디
                UserId: req.user.id, // 내가쓴게시글이어야함
            },
        });
        res.status(200).json({ PostId: parseInt(req.params.postId, 10) }); // 파라미터는 문자열
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;