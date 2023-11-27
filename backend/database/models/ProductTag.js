const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ProductTag.init(sequelize, DataTypes);
}

class ProductTag extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idProductTag: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_product_tag'
    },
    productoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'productos',
        key: 'id_producto'
      },
      field: 'producto_id'
    },
    idTag: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tags',
        key: 'id_tag'
      },
      field: 'id_tag'
    }
  }, {
    sequelize,
    tableName: 'product_tag',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_product_tag" },
        ]
      },
      {
        name: "id_product_tag",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_product_tag" },
        ]
      },
      {
        name: "fk_producto",
        using: "BTREE",
        fields: [
          { name: "producto_id" },
        ]
      },
      {
        name: "fk_tag",
        using: "BTREE",
        fields: [
          { name: "id_tag" },
        ]
      },
    ]
  });
  }
}
