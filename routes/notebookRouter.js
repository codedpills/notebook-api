const express = require("express");

const notebookController = require("../controllers/notebookController");

const routes = () => {
  const notebookRouter = express.Router();
  notebookRouter
    .route("/notes")
    .post(notebookController.postNote)
    .get(notebookController.getNotes);
  notebookRouter.use("/notes/:noteId", notebookController.findNoteById);
  notebookRouter
    .route("/notes/:noteId")
    .get(notebookController.getNote)
    .put(notebookController.updateNote)
    .delete(notebookController.deleteNote);

  return notebookRouter;
};

module.exports = routes;
