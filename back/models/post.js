module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', { // MYSql에서는 posts 테이블 생성
        // id가 기본적으로 들어있다.
        content: {
            type: DataTypes.TEXT,
            allowNull: false, // 필수
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // mb4는 이모티콘도 가능
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User); // 포스트는 유저에 속해있음
        db.Post.belongsToMany(db.Hashtag); // 다대다 관계
        db.Post.hasMany(db.Comment); // 하나의 게시글이 여러개 코멘트가짐
        db.Post.hasMany(db.Image);
        db.Post.belongsto(db.Post, { as: 'Retweet' }); // 리트윗관계 RetweetId
        db.Post.belongstoMany(db.User, { through: 'Like', as: 'Likers' }); // through를 통해 중간테이블 이름 만들어줌
    };
    return Post;
};