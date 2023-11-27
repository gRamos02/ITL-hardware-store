const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return MetPago.init(sequelize, DataTypes);
}

class MetPago extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idMetpag: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_metpag'
    },
    usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    tipoPago: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'tipo_pago'
    },
    provider: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    numCuenta: {
      type: DataTypes.STRING(13),
      allowNull: false,
      field: 'num_cuenta'
    },
    expiracion: {
      type: DataTypes.STRING(5),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'met_pagos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_metpag" },
        ]
      },
      {
        name: "id_metpag",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_metpag" },
        ]
      },
      {
        name: "fk_usuario_pago",
        using: "BTREE",
        fields: [
          { name: "usuario" },
        ]
      },
    ]
  });
  }
}
