export default function goods(sequelize, DataTypes) {
  return sequelize.define(
    "goods",
    {
      id: {
        type: DataTypes.INTEGER,
        // 是否为主键
        primaryKey: true,
        // 自动自增
        autoIncrement: true,
        // 是否允许为空
        allowNull: false,
      },
      shop_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      thumb_url: DataTypes.STRING,
    },
    {
      tableName: "goods",
    }
  )
};
