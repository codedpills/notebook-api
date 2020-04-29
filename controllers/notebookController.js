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

exports.getNotes = (req, res) => {
  let query = {};
  if (req.query.noteTitle) {
    query.noteTitle = req.query.noteTitle;
  }
  Notebook.find(query, (err, note) => {
    if (err) {
      return res.status(400).send(`Problem fetching notes: ${err}`);
    }
    res.status(200).json(note);
  });
};

exports.findNoteById = (req, res, next) => {
  const noteId = req.params.noteId;
  if (!noteId) {
    return res.status(400).send(`You need to pass a noteId`);
  }
  Notebook.findById(noteId, (err, note) => {
    if (err) {
      return res.status(400).send(err);
    }
    req.note = note;
    return next();
  });
};

exports.getNote = (req, res) => {
  return res.status(200).json(req.note);
};

exports.updateNote = (req, res) => {};

exports.deleteNote = (req, res) => {};
