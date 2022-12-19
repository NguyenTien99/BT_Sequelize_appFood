const { AppError } = require("../helpers/error");

const { LikeRes, User, Restaurant } = require("../models");



const addLikeRes = async(userId, resId) => {
    try {
        const restaurant = await Restaurant.findByPk(resId);

        if(!restaurant){
            // throw new Error(400, "restaurant not found");
            throw new AppError(400, "restaurant not found");
        }

        const user = await User.findByPk(userId);
        if(!user){
            // throw new Error(400, "restaurant not found")
            throw new AppError(400, "user not found");
        }

        console.log(restaurant.__proto__);

        // const hasliked = await restaurant.hasUserLike(user.id);
        // console.log(hasliked)
    } catch (error) {
        throw error;
    }
}



const getLikeResByUser = async (userId) => {
    try {
        const likedRes = User.findOne({
            where: {
                userId: userId
            },
            include: "userLikesRestaurant",
        });

        return likedRes;

    } catch (error) {
        throw error;
        // throw new AppError(500, "Something went wrong with DB");
    }
}

const getLikeResByRes = async (resId) => {
    try {
        const likedRes = Restaurant.findOne({
            where: {
                resId : resId,
            },
            include: "restaurantLikedUser",
        })

        return likedRes;
    } catch (error) {
        throw error;
        // throw new AppError(500, "Something went wrong with DB");

    }
}

module.exports = {
    addLikeRes,
    getLikeResByUser,
    getLikeResByRes,
}