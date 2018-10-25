const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('get members');
    pool.query(`SELECT "members"."first_name", "members"."last_name", "members"."mobile", "members"."email", "members"."address", "members"."city", "members"."zipcode", "members"."BD", "img_url", "garden_team"."name" AS "Garden_Name", "committee"."name" AS "Committee_Name", "members"."membership", "members"."member_since" 
    FROM "members" 
    JOIN "garden_team" ON "members"."garden_team_id"="garden_team"."id" 
    JOIN "committee" ON "members"."committee_id"="committee"."id"
    ORDER BY "last_name"`)
        .then((results) => {
            res.send(results.rows)
        }).catch((error) => {
            console.log('Error GET /members', error);
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;