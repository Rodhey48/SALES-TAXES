'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bucket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bucket.belongsTo(models.Product, {
        foreignKey: "ProductId",
        as: "Product"
      });
      Bucket.belongsTo(models.User, {
        foreignKey: "UserId",
        as: "User"
      })
    }
  }
  Bucket.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "User id is required"
        },
        notNull: {
          msg: "User id is required"
        },
      }
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Product id is required"
        },
        notNull: {
          msg: "Product id is required"
        },
      }
    },
    items: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Items id is required"
        },
        notNull: {
          msg: "Items id is required"
        },
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Status is required"
        },
        notNull: {
          msg: "Status is required"
        },
      }
    },
  }, {
    sequelize,
    modelName: 'Bucket',
  });
  return Bucket;
};