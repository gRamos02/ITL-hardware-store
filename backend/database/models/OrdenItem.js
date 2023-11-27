const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return OrdenItem.init(sequelize, DataTypes);
}

class OrdenItem extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idOrdenItem: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_orden_item'
    },
    ordenId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orden',
        key: 'id_orden'
      },
      field: 'orden_id'
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
    tableName: 'orden_items',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_orden_item" },
        ]
      },
      {
        name: "id_orden_item",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_orden_item" },
        ]
      },
      {
        name: "fk_orden_item",
        using: "BTREE",
        fields: [
          { name: "orden_id" },
        ]
      },
      {
        name: "fk_orden_product",
        using: "BTREE",
        fields: [
          { name: "producto_id" },
        ]
      },
    ]
  });
  }
}
