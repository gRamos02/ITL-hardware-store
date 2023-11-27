const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Carrito.init(sequelize, DataTypes);
}

class Carrito extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idCarrito: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_carrito'
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
    total: {
      type: DataTypes.DECIMAL(10,0),
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
    }
  }, {
    sequelize,
    tableName: 'carrito',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_carrito" },
        ]
      },
      {
        name: "id_carrito",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_carrito" },
        ]
      },
      {
        name: "fk_usuario_carrito",
        using: "BTREE",
        fields: [
          { name: "usuario_id" },
        ]
      },
    ]
  });
  }
}
