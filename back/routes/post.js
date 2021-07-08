const express = require('express');
// node에서는 웹팩을 안쓰므로 import -> require, export default -> module.exports

const { Post, Image, Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');

// 라우터로 분리
const router = express.Router();
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
            }, {
                model: User,
            }]
        });
        res.status(201).json(fulPost);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => { // POST /post/comment
    try {
        const post = await Post.findOne({
            where: {id: req.params.postId}
        });
        if (!post) {
            return res.status(403).send('존재하지 않는 게시글입니다.');
        }
        const comment = await Comment.create({
            content: req.body.content,
            postId: req.params.postId,
            UserId: req.user.id,
        })
        res.status(201).json(post);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/', (req, res) => { // DELETE /post
    res.send('hello express');
});

module.exports = router;