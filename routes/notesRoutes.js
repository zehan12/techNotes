const notesRouter = require("express").Router();

notesRouter.route("/").get().post().patch().delete();

module.exports = notesRouter;
