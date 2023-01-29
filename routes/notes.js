<<<<<<< HEAD
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

// notes api
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// /api/feedback
// GET Route for retrieving all the feedback
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for feedback`);

  readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting feedback
notes.post('/', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to submit feedback`);

  // Destructuring assignment for the items in req.body
  const { } = req.body;

  // If all the required properties are present
  if () {
    // Variable for the object we will save
    const newNote = {
    };

    readAndAppend(newFeedback, './db/feedback.json');

    const response = {
      status: 'success',
      body: newNote,
    };
    
    res.json(response);
  } else {
    res.json("Error in posting new note");
  }   
});

module.exports = notes;
