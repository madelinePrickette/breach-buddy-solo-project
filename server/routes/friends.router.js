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
  SELECT "username", "user_user".user_id_1, "user_user".user_id_2 FROM "user"
    JOIN "user_user"
    ON "user".id = "user_user".user_id_1
    WHERE "user_user".user_id_2 = $1;
  `;
  const queryValues = [req.user.id];

  pool.query(queryText, queryValues)
  .then( (result) => {
    res.send(result.rows)
  }).catch( (err) => {
    console.log('Error in friends.router.js GET', err)
    res.sendStatus(500);
  })

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

/**
 * DELETE route template
 */
router.delete('/:id', (req, res) => {
  // DELETE route code here
  const myId = req.user.id
  const friendId = req.params.id
  
  const queryText =
  `
  DELETE FROM "user_user"
  WHERE ("user_id_1" = $1 OR "user_id_1" = $2) AND ("user_id_2" = $3 OR "user_id_2" = $4);
  `;

  const queryValues = [friendId, myId, myId, friendId];

  pool.query(queryText, queryValues)
  .then( (result) => {
    res.sendStatus(200);
  }).catch( (err) => {
    console.error('error in friends.router.js router.delete', err)
    res.sendStatus(500);
  });
});

module.exports = router;