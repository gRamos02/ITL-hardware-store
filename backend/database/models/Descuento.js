const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Descuento.init(sequelize, DataTypes);
}

class Descuento extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idDescuento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_descuento'
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    descPercent: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      field: 'desc_percent'
    },
    activo: {
      type: DataTypes.BOOLEAN,
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
    },
    borrado: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'descuentos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_descuento" },
        ]
      },
      {
        name: "id_descuento",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_descuento" },
        ]
      },
    ]
  });
  }
}
