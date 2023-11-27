const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Producto.init(sequelize, DataTypes);
}

class Producto extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idProducto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_producto'
    },
    nombre: {
      type: DataTypes.STRING(85),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    precioUnit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'precio_unit'
    },
    sku: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    inventarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'prod_inventario',
        key: 'id_prod_inv'
      },
      field: 'inventario_id'
    },
    descuentoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'descuentos',
        key: 'id_descuento'
      },
      field: 'descuento_id'
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
    tableName: 'productos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
      {
        name: "id_producto",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
      {
        name: "fk_inv_prod",
        using: "BTREE",
        fields: [
          { name: "inventario_id" },
        ]
      },
      {
        name: "fk_desc_prod",
        using: "BTREE",
        fields: [
          { name: "descuento_id" },
        ]
      },
    ]
  });
  }
}
