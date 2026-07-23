const User = require("../models/User");

const registerUser = async (req, res) => {
    console.log(req.body);

    res.json({
        success: true,
        message: "Register API Working"
    });
};

module.exports = {
    registerUser
};