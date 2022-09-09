const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  // GET route code here
    const id = req.params.id

  const queryText = 
  `
  SELECT "user".username,
  "user".picture, 
  "user".availability, 
  "user".bio, 
  "user".discord,
  "attacker".attacker_name,
  "defender".defender_name,
  "gamemode".gamemode_name,
  "rank".rank_name
    FROM "user"
    LEFT JOIN "attacker"
    ON "attacker".id = "user".attacker_id
    LEFT JOIN "defender"
    ON "defender".id = "user".defender_id
    LEFT JOIN "gamemode"
    ON "gamemode".id = "user".gamemode_id
    LEFT JOIN "rank"
    ON "rank".id = "user".rank_id
    WHERE "user".id = $1;
  `

  const queryValues = [id]

  pool.query(queryText, queryValues)
  .then( (result) => {
    res.send(result.rows[0]) //put [0] to assure that it is always an object
  }).catch( (err) => {
    console.log('Error in other.profile.router.js', err)
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