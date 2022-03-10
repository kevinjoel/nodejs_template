const constants = require("../misc/constants.misc");
const jsonwebtoken = require("jsonwebtoken");


module.exports = async (req, res, next) => {
    try {
        const headers = req.headers;
        console.log(headers.hasOwnProperty("x-client-id")
        && headers.hasOwnProperty("authorization"));

        if (headers.hasOwnProperty("x-client-id")
            && headers.hasOwnProperty("authorization")) {

            const auth_token = headers.authorization.split(" ")[1];
            const token_decoded = jsonwebtoken.verify(auth_token, "KEYTOKEN");
            next();
        } else {
            res.status(403).send(constants.RESPONSE_403_ERROR)
        }
    } catch (error) {
        console.log(error)
        res.status(403).send(constants.RESPONSE_403_ERROR)
    }
}