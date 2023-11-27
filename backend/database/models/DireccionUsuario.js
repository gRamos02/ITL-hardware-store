const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return DireccionUsuario.init(sequelize, DataTypes);
}

class DireccionUsuario extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idDireccion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_direccion'
    },
    calle: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    colonia: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    numInt: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'num_int'
    },
    numExt: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'num_ext'
    },
    codPostal: {
      type: DataTypes.STRING(5),
      allowNull: false,
      field: 'cod_postal'
    },
    localidad: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    estadoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'estado',
        key: 'id_estado'
      },
      field: 'estado_id'
    },
    telefono: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    }
  }, {
    sequelize,
    tableName: 'direccion_usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_direccion" },
        ]
      },
      {
        name: "id_direccion",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_direccion" },
        ]
      },
      {
        name: "fk_usuario",
        using: "BTREE",
        fields: [
          { name: "usuario" },
        ]
      },
      {
        name: "fk_direstado",
        using: "BTREE",
        fields: [
          { name: "estado_id" },
        ]
      },
    ]
  });
  }
}
