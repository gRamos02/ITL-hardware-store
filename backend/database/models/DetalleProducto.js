const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return DetalleProducto.init(sequelize, DataTypes);
}

class DetalleProducto extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idDetalle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'subcat_detalle',
        key: 'id_subcat_detalle'
      },
      field: 'id_detalle'
    },
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'productos',
        key: 'id_producto'
      },
      field: 'id_producto'
    }
  }, {
    sequelize,
    tableName: 'detalle_producto',
    timestamps: false,
    indexes: [
      {
        name: "fk_dp_detalle",
        using: "BTREE",
        fields: [
          { name: "id_detalle" },
        ]
      },
      {
        name: "fk_dp_producto",
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
    ]
  });
  }
}
