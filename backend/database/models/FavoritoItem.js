const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return FavoritoItem.init(sequelize, DataTypes);
}

class FavoritoItem extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idFavItem: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_fav_item'
    },
    favoritoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'favoritos',
        key: 'id_favorito'
      },
      field: 'favorito_id'
    },
    productoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'id_producto'
      },
      field: 'producto_id'
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
    tableName: 'favorito_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_fav_item" },
        ]
      },
      {
        name: "id_fav_item",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_fav_item" },
        ]
      },
      {
        name: "fk_favitem",
        using: "BTREE",
        fields: [
          { name: "favorito_id" },
        ]
      },
      {
        name: "fk_favitem_prod",
        using: "BTREE",
        fields: [
          { name: "producto_id" },
        ]
      },
    ]
  });
  }
}
