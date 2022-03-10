const express = require('express');
const routes = express.Router();

const controllers = require('../controllers');
const userControllers = controllers.users;

const middleware = require("../middlewares");
const authMiddleware = middleware.auth;

routes
    .route("")
    .post(
        authMiddleware,
        userControllers.create
    )

routes
    .route("/search")
    .get(
        authMiddleware,
        userControllers.search
    )

routes
    .route("/login")
    .post(
        userControllers.login
    )

module.exports = routes;