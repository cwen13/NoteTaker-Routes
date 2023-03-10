const notes = require('express').Router();
const fs = require("fs");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');
const uuid  = require("../helpers/uuid");

notes.get("/", (req,res) => {
  readFromFile("./db/db.json")
    .then((data) => res.json(JSON.parse(data)));
});

notes.post("/", (req,res) => {
  console.log(req.body);
  const {title, text} = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuid()
    };  
    readAndAppend(newNote, "./db/db.json");
    
    const response = {
      status: "sucess",
      body: newNote,
      id: uuid()
    };
    
    
    res.json(response);
  } else {
    res.json("Error in posting new note");
  }
});

notes.delete("/:id", async (req,res) => {
  console.log(req.params.id);
  let data = await readFromFile("./db/db.json")
  data = (JSON.parse(data)).filter((entry) => {return entry.id !== req.params.id});
  writeToFile("./db/db.json", data);
  return res.json("note removed");
});



module.exports = notes;
