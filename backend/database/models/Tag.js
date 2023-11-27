const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Tag.init(sequelize, DataTypes);
}

class Tag extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idTag: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_tag'
    },
    tagName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'tag_name'
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "'Sin especificar'"
    },
    creacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'tags',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tag" },
        ]
      },
      {
        name: "id_tag",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tag" },
        ]
      },
    ]
  });
  }
}
