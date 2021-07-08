const express = require('express');

const { Post, User, Image, Comment } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /posts
    try {
        const posts = await Post.findAll({
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
            }],
            // offset: 0, // 1~10 offset이 10이면 11~20 중간빠지면 오류나고 하는 치명적인 단점때문에 lastId를씀 
        });
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;