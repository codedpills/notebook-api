const Notebook = require("../models/notebookModel");

exports.postNote = (req, res) => {
  const note = new Notebook(req.body);
  if (!req.body.noteTitle) {
    return res.status(400).send("noteTitle is required!");
  }
  if (!req.body.noteDescription) {
    return res.status(400).send("noteDescription is required!");
  }
  if (!req.body.noteDate) {
    return res.status(400).send("noteDate is required!");
  }
  note.save((err, note) => {
    if (err) {
      return res.status(400).send(`Problem saving note: ${err}`);
    }
    res.status(201).json(note);
  });
};

exports.findNoteById = (req, res, next) => {};

exports.getNote = (req, res) => {};

exports.updateNote = (req, res) => {};

exports.deleteNote = (req, res) => {};
