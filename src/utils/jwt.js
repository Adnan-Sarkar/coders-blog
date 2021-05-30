require('dotenv').config()
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "FelicityDigital";

exports.generateJWTToken = userData => {
    // 86400
    return jwt.sign(userData, JWT_SECRET_KEY, {
        expiresIn: 86400
    });
}
exports.verifyToken = jwtToken => {
    try {
        return jwt.verify(jwtToken, JWT_SECRET_KEY);
    } catch (e) {
        return null;
    }
}
// exports.makeHash = async data => await bcrypt.hash(data, 10);

// exports.compareHash = async (data, hashedData) => await bcrypt.compare(data, hashedData);

// let user = {
//     name: "Salman Akash"
// }
// const access_token = this.generateJWTToken(user)
// console.log(`access_token ` + access_token);

// const verifiedToken = this.verifyToken(access_token)
// console.log(verifiedToken);
window.jwt = jwt