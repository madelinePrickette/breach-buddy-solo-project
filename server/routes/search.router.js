const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * POST that runs a SELECT for filtering
 */
 router.post('/', (req, res) => {
  // GET route code here
  console.log('req.body:', req.body)
  console.log('rankId:', req.body.rankId)
  console.log('gamemodeId:', req.body.gamemodeId)

  if(req.body.rankId === 0 && req.body.gamemodeId === 0){
    const queryText = 
    `
    SELECT * FROM "user";
    `
    pool.query(queryText)
    .then( (result) => {
      //console.log(result.rows);
      res.send(result.rows)
    }).catch( (err) => {
      console.error('error in POST/SELECT in search.router.js', err);
      res.sendStatus(500);
    })
  } else if(req.body.rankId != 0 && req.body.gamemodeId === 0) {
    const queryText =
    `
    SELECT * FROM "user"
    WHERE "user".rank_id = $1;
    `

    const queryValues = [req.body.rankId];

    pool.query(queryText, queryValues)
    .then( (result) => {
      //console.log(result.rows);
      res.send(result.rows)
    }).catch( (err) => {
      console.error('error in POST/SELECT in search.router.js', err);
      res.sendStatus(500);
    })
  } else if(req.body.rankId === 0 && req.body.gamemodeId != 0) {
    const queryText =
    `
    SELECT * FROM "user"
    WHERE "user".gamemode_id = $1;
    `

    const queryValues = [req.body.gamemodeId];

    pool.query(queryText, queryValues)
    .then( (result) => {
      //console.log(result.rows);
      res.send(result.rows)
    }).catch( (err) => {
      console.error('error in POST/SELECT in search.router.js', err);
      res.sendStatus(500);
    })
  } else if(req.body.rankId != 0 && req.body.gamemodeId != 0) {
    const queryText =
    `
    SELECT * FROM "user"
    WHERE "user".rank_id = $1 AND "user".gamemode_id = $2
    `

    const queryValues = [req.body.rankId, req.body.gamemodeId];

    pool.query(queryText, queryValues)
    .then( (result) => {
      //console.log(result.rows);
      res.send(result.rows)
    }).catch( (err) => {
      console.error('error in POST/SELECT in search.router.js', err);
      res.sendStatus(500);
    })
  } else {
    console.log('WEIRD ERROR');
  }
});

module.exports = router;