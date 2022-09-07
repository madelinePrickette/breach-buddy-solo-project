const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//DEFENDER GET ROUTE FOR DEFENDER DROPDOWN
/**
 * GET route template
 */
 router.get('/', (req, res) => {
    // GET route code here
    const queryText =
    `
    SELECT * FROM "defender";
    `;
    pool.query(queryText)
    .then( (result) => {
      res.send(result.rows)
    }).catch( (err) => {
      console.error('Error in dropdown.data.router.js', err)
      res.sendStatus(500);
    })
  });

module.exports = router;
