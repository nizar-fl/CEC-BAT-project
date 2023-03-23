const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
    const token = req.headers["authorization"]
        ? req.headers["authorization"]
        : null;

    if (!token) {
        return res.status(401).json({ msg: "You are not authorized" });
    }

    const verified = jwt.verify(token, process.env.SECRETTOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).json({ msg: "Token verification failed" });
        }
        return decoded;
    });

    const user = await User.findById(verified.id);

    if (!user) {
        return res.status(401).json({ msg: "User doesn't exist" });
    }
    
   
    
    req.user = user;
    next();
};

module.exports = isAuth;

