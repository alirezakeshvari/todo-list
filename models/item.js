"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static init(sequelize, DataTypes) {
      return super.init(
        {
          title: {
            type: DataTypes.TEXT,
            field: "title",
          },
          status: {
            type: DataTypes.BOOLEAN,
            field: "status",
            defaultValue: 0,
          },
          createdAt: {
            type: DataTypes.DATE,
            field: "created_at",
            defaultValue: Sequelize.now,
          },
          updatedAt: {
            type: DataTypes.DATE,
            field: "updated_at",
            defaultValue: Sequelize.now,
          },
        },
        {
          sequelize,
          modelName: "Item",
          tableName: "items",
        }
      );
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init(sequelize, DataTypes);
  return Item;
};
