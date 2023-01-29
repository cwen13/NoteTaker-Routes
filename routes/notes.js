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
    res.json('Error in posting feedback');
  }
});

module.exports = notes;
