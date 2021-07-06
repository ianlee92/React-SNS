const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'email', // req.body.email
        passwordField: 'password',
    }, async (email, password, done) => {
        try { // await는 항상 try로 감싼다
            const user = await User.findOne({ // 이메일 있는지 확인
                where: { email }
            });
            if (!user) {
                return done(null, false, { reason: '존재하지 않는 사용자입니다!' });
            }
            const result = await bcrypt.compare(password, user.password);
            if (result) {
                return done(null, user); // 두번째가 성공했을 때
            }
            return done(null, false, { reason: '비밀번호가 틀렸습니다.' });
        } catch (error) {
            console.error(error);
            return done(error);
        }
    }));
};