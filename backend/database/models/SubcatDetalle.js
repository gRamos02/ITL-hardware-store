const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return SubcatDetalle.init(sequelize, DataTypes);
}

class SubcatDetalle extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idSubcatDetalle: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_subcat_detalle'
    },
    tituloSubcat: {
      type: DataTypes.STRING(35),
      allowNull: false,
      field: 'titulo_subcat'
    },
    decripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    creacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    modificacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    tituloCat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categoria_detalle',
        key: 'id_cat_detalle'
      },
      field: 'titulo_cat'
    }
  }, {
    sequelize,
    tableName: 'subcat_detalle',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_subcat_detalle" },
        ]
      },
      {
        name: "id_subcat_detalle",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_subcat_detalle" },
        ]
      },
      {
        name: "fk_titulo_cat",
        using: "BTREE",
        fields: [
          { name: "titulo_cat" },
        ]
      },
    ]
  });
  }
}
