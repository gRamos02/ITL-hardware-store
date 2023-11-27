const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ProdInventario.init(sequelize, DataTypes);
}

class ProdInventario extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idProdInv: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_prod_inv'
    },
    cantidad: {
      type: DataTypes.INTEGER,
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
    tableName: 'prod_inventario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_prod_inv" },
        ]
      },
      {
        name: "id_prod_inv",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_prod_inv" },
        ]
      },
    ]
  });
  }
}
