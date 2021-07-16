const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Image extends Model {
    static init(sequelize){
        return super.init({
            // id가 기본적으로 들어있다.
            src: {
                type: DataTypes.STRING(200),
                allowNull: false, // 필수
            },
        }, {
            modelName: 'Image',
            tableName: 'images',
            charset: 'utf8',
            collate: 'utf8_general_ci',
            sequelize,
        });
    }
    static associate(db){
        db.Image.belongsTo(db.Post); // 이미지는 포스트에 속함
    }
};