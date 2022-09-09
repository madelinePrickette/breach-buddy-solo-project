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
  SELECT * FROM "user"
  WHERE "user".id != $1;
  `;

  const queryValues = [req.user.id];

  pool.query(queryText, queryValues)
  .then( (result) => { //result will always be an array
    res.send(result.rows);
  }).catch( (err) => {
    console.log('Error in search.router.js GET', err);
    res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;