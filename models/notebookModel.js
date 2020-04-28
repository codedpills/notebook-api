const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notebookModel = new Schema({
  noteTitle: String,
  noteDescription: String,
  noteDate: { type: Date },
});

module.exports = mongoose.model("Notebook", notebookModel);
