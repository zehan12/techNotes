const userRouter = require("express").Router();

userRouter.route("/").get().post().patch().delete();

module.exports = userRouter;
