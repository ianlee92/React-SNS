const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models');

const router = express.Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => { // 서버에러, 성공객체, info
        if (err) {
           console.error(err);
           next(err);
        }
        if (info) {
            return res.status(401).send(info.reason); // 401 로그인 잘못됐을 때
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            return res.status(200).json(user);
        });
    })(req, res, next);
}); 

router.post('/', async (req, res, next) => { // POST /user
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

module.exports = router;