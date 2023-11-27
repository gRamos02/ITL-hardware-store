const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return RolUsuario.init(sequelize, DataTypes);
}

class RolUsuario extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idRol: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_rol'
    },
    nombreRol: {
      type: DataTypes.STRING(35),
      allowNull: false,
      field: 'nombre_rol'
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rol_usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_rol" },
        ]
      },
      {
        name: "id_rol",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_rol" },
        ]
      },
    ]
  });
  }
}
