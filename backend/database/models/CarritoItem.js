const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return CarritoItem.init(sequelize, DataTypes);
}

class CarritoItem extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idCarItem: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_car_item'
    },
    carritoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'carrito',
        key: 'id_carrito'
      },
      field: 'carrito_id'
    },
    productoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'id_producto'
      },
      field: 'producto_id'
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    creado: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    modificado: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'carrito_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_car_item" },
        ]
      },
      {
        name: "id_car_item",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_car_item" },
        ]
      },
      {
        name: "fk_carritoitem",
        using: "BTREE",
        fields: [
          { name: "carrito_id" },
        ]
      },
      {
        name: "fk_carritoitem_prod",
        using: "BTREE",
        fields: [
          { name: "producto_id" },
        ]
      },
    ]
  });
  }
}
