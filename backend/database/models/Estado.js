const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Estado.init(sequelize, DataTypes);
}

class Estado extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idEstado: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_estado'
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'estado',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_estado" },
        ]
      },
      {
        name: "id_estado",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_estado" },
        ]
      },
    ]
  });
  }
}
