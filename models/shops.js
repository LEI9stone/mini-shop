export default function shops(sequelize, DataTypes) {
  return sequelize.define(
    "shops",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      thumb_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "shops",
    }
  );
}
