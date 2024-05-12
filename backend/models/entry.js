
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Blog extends Model {
        static associate(models) {

        }
    }
    Blog.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            titulo: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            sub_titulo: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            contenido: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            imagen_destacada: {
                type: DataTypes.STRING(255)
            },
            autor: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            fecha_publicacion: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
        sequelize,
        modelName: 'Entradas',
        timestamps: false
    }
    );

    return Blog;
};