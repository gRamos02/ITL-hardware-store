const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Usuario.init(sequelize, DataTypes);
}

class Usuario extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idUsuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_usuario'
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    apellidoPat: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'apellido_pat'
    },
    apellidoMat: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'apellido_mat'
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    psword: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rol_usuario',
        key: 'id_rol'
      }
    },
    fechaCreacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      field: 'fecha_creacion'
    },
    fechaModif: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      field: 'fecha_modif'
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "id_usuario",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "fk_rol_usuario",
        using: "BTREE",
        fields: [
          { name: "rol" },
        ]
      },
    ]
  });
  }
}
