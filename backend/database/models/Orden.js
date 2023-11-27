const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Orden.init(sequelize, DataTypes);
}

class Orden extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idOrden: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_orden'
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_usuario'
    },
    total: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false
    },
    idPago: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'detalle_pago',
        key: 'id_detalle_pago'
      },
      field: 'id_pago'
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true
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
    tableName: 'orden',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_orden" },
        ]
      },
      {
        name: "id_orden",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_orden" },
        ]
      },
      {
        name: "fk_det_pag",
        using: "BTREE",
        fields: [
          { name: "id_pago" },
        ]
      },
    ]
  });
  }
}
