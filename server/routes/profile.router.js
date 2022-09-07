const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('req.user.id:');
    console.log(req.user.id);
  // GET route code here
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
  
  pool.query(queryText, [req.user.id])
  .then( (result) => {
    console.log('result rows:', result.rows)
    res.send(result.rows)
  }).catch( (err) => {
    console.error('error in reofile.router.js GET', err);
    res.sendStatus(500);
  })
});

/**
 * PUT route template
 */
router.put('/', (req, res) => {
  // PUT route code here
  const queryText =
  `
  UPDATE "user"
  SET "picture" = $1,
      "discord" = $2,
      "attacker_id" = $3,
      "defender_id" = $4,
      "rank_id" = $5,
      "gamemode_id" = $6,
      "availability" = $7,
      "bio" = $8
  WHERE "id" = $9
  `;
  const queryValues = [
    req.body.picture, 
    req.body.discord, 
    req.body.attacker_id,
    req.body.defender_id,
    req.body.rank_id,
    req.body.gamemode_id,
    req.body.availability,
    req.body.bio,
    req.user.id
  ];
  pool.query(queryText, queryValues)
  .then( (result) => {
    res.sendStatus(200);
  }).catch( (err) => {
    console.log('Error in profile.router.js', err)
    res.sendStatus(500);
  })
  
});

module.exports = router;