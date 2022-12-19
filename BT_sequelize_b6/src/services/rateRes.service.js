const { RateRes, User, Restaurant } = require("../models");



const createRate = async(data) => {
    try {
        const createdRate = await RateRes.create(data);
        return createdRate;
    } catch (error) {
        throw error;
    }
}

const getRateByUser = async (userId) => {
    try {
        const data = await User.findOne({
            where: {
                userId
            },
            include: "userRatesRestaurant",
        })

        return data;
    } catch (error) {
        throw error;
    }
}

const getRateByRes = async (resId) => {
    try {
        const data = await Restaurant.findOne({
            where: {
                resId,
            },
            include: "restaurantRatedUser",
        })

        return data
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createRate,
    getRateByUser,
    getRateByRes,
}