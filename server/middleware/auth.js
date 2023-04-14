const jwt = require("jsonwebtoken");
const User = require("models/user");

const secret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]; //this grabs the token from the header
        let decodedData = jwt.decode(token);
        const user = await User.findOne({ _id: decodeData?.sub });
        
        if(!user) throw new Error();

        req.user = user;
        req.userId = decodedData?.sub;

        next();
    } catch (error) {
        console.log(error)
    }
}

module.exports = auth;