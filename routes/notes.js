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
  const {title, text} = req.body;

  if (title && text) {
    const newNote = {
      title,
      text
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

//notes.delete("/:id", (req,re) => { 
//
//}
  
