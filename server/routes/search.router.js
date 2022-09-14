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
 * GET ALL AT THIS RANK
 */
 router.get('/r/:rankFilter', (req, res) => {
  // GET route code here
  console.log('in rank filter server');
  const rankId = req.params.rankFilter;
  console.log('rank id from req.params', rankId);
  
  const queryText =
  `
  SELECT "user".username, "user".id FROM "user"
  WHERE "user".rank_id = $1;
  `;

  const queryValues = [rankId];

  pool.query(queryText, queryValues)
  .then( (result) => { //result will always be an array with users who have the same rank
    res.send(result.rows);
  }).catch( (err) => {
    console.log('Error in search.router.js GET', err);
    res.sendStatus(500);
  })
});

/**
 * GET ALL AT THIS GAMEMODE
 */
 router.get('/t/:gamemodeFilter', (req, res) => {
  // GET route code here
  console.log('in gamemode filter server');
  const gamemodeId = req.params.gamemodeFilter;
  console.log('gamemode id from req.params', gamemodeId);
  
  const queryText =
  `
  SELECT "user".username, "user".id FROM "user"
  WHERE "user".gamemode_id = $1;
  `;

  const queryValues = [gamemodeId];

  pool.query(queryText, queryValues)
  .then( (result) => { //result will always be an array with users who have the same rank
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