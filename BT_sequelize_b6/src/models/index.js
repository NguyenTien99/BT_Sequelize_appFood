const { Sequelize } = require("sequelize");
const likeRes = require("./likeRes");


const sequelize = new Sequelize("app_food", "root", "1234", {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Sequelize Connected");
    } catch (error) {
        console.log(("Sequelize Failed"), error);
    }
})();

//Khởi tạo models
const User = require("./User")(sequelize);
const Restaurant = require("./Restaurant")(sequelize);
const LikeRes = require("./likeRes")(sequelize);
const RateRes = require("./rateRes")(sequelize);
const Order = require("./order")(sequelize);

// Xử lí like nhà hàng
User.belongsToMany(Restaurant,{
    as: "userLikesRestaurant",
    through: LikeRes,
    foreignKey: "userId",
});

Restaurant.belongsToMany(User, {
    as: "restaurantLikedUser",
    through: LikeRes,
    foreignKey: "resId"
})

// Xử lý đánh giá nhà hàng
// RateRes.belongsTo(User, {foreignKey: "userId"});
// User.hasMany(RateRes, {foreignKey:"userId"});

// RateRes.belongsTo(Restaurant, {foreignKey: "resId"});
// Restaurant.hasMany(RateRes, {foreignKey: "resId"});

User.belongsToMany(Restaurant,{
    as: "userRatesRestaurant",
    through: RateRes,
    foreignKey: "userId",
});

Restaurant.belongsToMany(User, {
    as: "restaurantRatedUser",
    through: RateRes,
    foreignKey: "resId",
})

// User đặt món


module.exports = {
    sequelize,
    User,
    Restaurant,
    LikeRes,
    RateRes,
    Order,
};