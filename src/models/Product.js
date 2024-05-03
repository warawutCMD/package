const { DataTypes } = require('sequelize');
const { BaseModel } = require('./base');

class Product extends BaseModel {
  static init(sequelize) {
    return super.init(
      {
        // กำหนด attributes ของโมเดล Product
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        // Other attributes...
      },
      {
        sequelize,
        modelName: 'Product',
        tableName: 'products',
      }
    );
  }
}

module.exports = { Product };
