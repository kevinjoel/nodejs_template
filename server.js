const http = require('http');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const constants = require('./misc/constants.misc');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');


const app = express();
const server = http.createServer(app);

const routes = require("./routes");

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", routes);

server.listen(constants.SERVER_PORT, () => {
    console.log("SERVER RUNNING ON PORT " + constants.SERVER_PORT);
})