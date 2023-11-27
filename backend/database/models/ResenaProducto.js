const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ResenaProducto.init(sequelize, DataTypes);
}

class ResenaProducto extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idResena: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_reseña'
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      },
      field: 'id_usuario'
    },
    tituloRes: {
      type: DataTypes.STRING(75),
      allowNull: false,
      field: 'titulo_res'
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    likes: {
      type: DataTypes.INTEGER,
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
    tableName: 'reseña_producto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_reseña" },
        ]
      },
      {
        name: "id_reseña",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_reseña" },
        ]
      },
      {
        name: "fk_usuario_reseña",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  }
}
