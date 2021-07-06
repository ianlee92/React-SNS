module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', { // MYSql에서는 comments 테이블 생성
        // id가 기본적으로 들어있다.
        content: {
            type: DataTypes.TEXT,
            allowNull: false, // 필수
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
    });
    Comment.associate = (db) => {};
    return Comment;
};