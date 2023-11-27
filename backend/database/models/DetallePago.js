const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return DetallePago.init(sequelize, DataTypes);
}

class DetallePago extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idDetallePago: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_detalle_pago'
    },
    ordenId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'orden_id'
    },
    monto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    proveedor: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    estatus: {
      type: DataTypes.STRING(35),
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
    tableName: 'detalle_pago',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_detalle_pago" },
        ]
      },
      {
        name: "id_detalle_pago",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_detalle_pago" },
        ]
      },
    ]
  });
  }
}
