const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  return sequelize.define(
    "RateRes",
    {
      id: {
        type: DataTypes.VIRTUAL,
        autoIncrement: true,
        primaryKey: true,
        get() {
          return `${this.userId}-${this.resId}`;
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
      },
      resId: {
        type: DataTypes.INTEGER,
        field: "res_id",
      },
      amount: {
        type: DataTypes.INTEGER,
      },
      dateRate: {
        type: DataTypes.DATE,
        field: "date_rate",
      },
    },
    {
      tableName: "rate_res",
      timestamps: false,
    }
  );
};