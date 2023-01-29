const notes = require('express').Router();
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');
//const uuid  = require("../helpers/uuid");

notes.get("/", (req,res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notes.post("/", (req,res) => {
  console.log(req.body);

  const {noteTitle, noteText} = req.body;
  if (noteTitle && noteText) {
    const newNote = {
      "title": noteTitle,
      "text": noteText
    };
    readAndAppend(newNote, "./db/db.json");

    const response = {
      status: "sucess",
      body: newNote
    };

    res.json(response);
  } else {
    res.json("Error in posting new note");
  }
   
});

module.exports = notes;
