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
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;