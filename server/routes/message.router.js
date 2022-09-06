const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = 
  `
  SELECT * FROM "chat";
  `

  pool.query(queryText)
  .then( result => {
    res.send(result.rows)
  }).catch( err => {
    console.log('Error in messages.router.js GET', err)
    res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log('this is req.body', req.body.message);
  const message = req.body.message
  // POST route code here
  const queryText =
  `
  INSERT INTO "chat" ("message")
  VALUES ($1);
  `
  const queryValues = [message]

  pool.query(queryText, queryValues)
  .then( result => {
    res.sendStatus(201);
  }).catch( err => {
    console.log('Error in messages.router.js POST', err)
    res.sendStatus(500);
  })
});

module.exports = router;