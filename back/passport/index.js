const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
    passport.serializeUser((user, done) => { // 세션에 다들고있기 무거우니까 user.id만 가지고있고
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => { // 복원하기 위해 id를 통해 db에서 복구를 함
        try {
            const user = await User.findOne({ where: { id }});
            done(null, user);
            await User.findOne({ where: { id }})
        } catch (error) {
            console.error(error);
            done(error);
        }
    });

    local();
};