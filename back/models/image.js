module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', { // MYSql에서는 images 테이블 생성
        // id가 기본적으로 들어있다.
        src: {
            type: DataTypes.STRING(200),
            allowNull: false, // 필수
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    Image.associate = (db) => {
        db.Image.belongsTo(db.Post); // 이미지는 포스트에 속함
    };
    return Image;
};