const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Favorito.init(sequelize, DataTypes);
}

class Favorito extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idFavorito: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_favorito'
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      },
      field: 'usuario_id'
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
    tableName: 'favoritos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_favorito" },
        ]
      },
      {
        name: "id_favorito",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_favorito" },
        ]
      },
      {
        name: "fk_usuario_fav",
        using: "BTREE",
        fields: [
          { name: "usuario_id" },
        ]
      },
    ]
  });
  }
}
