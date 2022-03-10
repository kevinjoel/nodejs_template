const jsonwebtoken = require("jsonwebtoken");

exports.create = async (req, res) => {
    res.send("ESTO YA ES UNA API")
}

exports.search = async (req, res) => {
    const session = req.session;
    console.log(req.session)

    res.send("USUARIOS ECONTRADOS")
}

exports.login = async (req, res) => {
    const user = req.body;
    if (user.username && user.password) {
        const session = req.session;
        session.userid = user.username;

        const auth_token = jsonwebtoken.sign(
            {
                userId: "",
                userEmail: "",
                userPhone: ""
            },
            "KEYTOKEN",
            { expiresIn: "60m" }
        );

        const refresh_token = jsonwebtoken.sign(
            {
                userId: "",
            },
            "REFRESH",
            { expiresIn: "60m" }
        );

        session.auth_token = auth_token;
        session.refresh_token = refresh_token;

        res.send({ auth_token });
    } else {
        res.sendStatus(500);
    }
}