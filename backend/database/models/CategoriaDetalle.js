const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return CategoriaDetalle.init(sequelize, DataTypes);
}

class CategoriaDetalle extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idCatDetalle: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_cat_detalle'
    },
    tituloCat: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'titulo_cat'
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "'Sin especificar'"
    }
  }, {
    sequelize,
    tableName: 'categoria_detalle',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cat_detalle" },
        ]
      },
      {
        name: "id_cat_detalle",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cat_detalle" },
        ]
      },
    ]
  });
  }
}
