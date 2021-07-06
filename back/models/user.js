module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', { // MYSql에서는 users 테이블 생성
        // id가 기본적으로 들어있다.
        email: {
            type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
            allowNull: false, // 필수
            unique: true, // 고유한 값
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false, // 필수
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false, // 필수
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장
    });
    User.associate = (db) => { // 관계형
        db.User.hasMany(db.Post); // 사람:포스트 1:다
        db.User.hasMany(db.Comment);
        db.User.belongstoMany(db.Post, { through: 'Like', as: 'Liked' }); //through를 두 테이블 만들어줘야됨
        db.User.belongstoMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' });
        db.User.belongstoMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId' });
    };
    return User;
};