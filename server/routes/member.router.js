const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET info on all members for populating the Member table
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



// POST => info for adding a new member to the database
router.post('/', (req, res) => {
    let body = req.body.members;
    pool.query(`INSERT INTO "members" ("first_name", "last_name", "mobile", "email", "address", "city", "zipcode", "BD", "img_url", "garden_team_id", "captain", "committee_id", "chair", "membership", "member_since", "year_resigned", "dues_paid" )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17);`,
        [body.first_name,
        body.last_name,
        body.mobile,
        body.email,
        body.address,
        body.city,
        body.zipcode,
        body.BD,
        body.img_url,
        body.garden_team_id,
        body.captain,
        body.committee_id,
        body.chair,
        body.membership,
        body.member_since,
        body.year_left,
        body.dues_paid])
        .then((results) => {
            res.send(results.rows)
        }).catch((error) => {
            console.log('Error with server-side POST:', error);
            res.send(500);
        })
});

router.delete('/', (req, res) => {
    console.log('delete a member');
    pool.query(`DELETE FROM "members"
    WHERE "first_name"=$1 AND "last_name"=$2;`,
        [req.body.first_name,
        req.body.last_name])
        .then((results) => {
            res.send(200)
        }).catch((error) => {
            console.log('Error with server-side DELETE:', error);
            res.send(500);
        })
});

router.put('/', (req, res) => {
    const updatedMember = req.body;
    console.log('in the edit function');
    console.log(req.body);
    pool.query(`UPDATE members
    SET "first_name" = $1, 
    "last_name" = $2, 
    "mobile" = $3, 
    "email" = $4, 
    "address" = $5, 
    "city" = $6, 
    "zipcode" = $7, 
    "BD" = $8, 
    "img_url" = $9, 
    "garden_team_id" = $10, 
    "captain" = $11, 
    "committee_id" = $12,
    "chair" = $13,
    "membership" = $14,
    "member_since" = $15,
    "year_resigned" = $16,
    "dues_paid" = $17
    WHERE "first_name"=$18 AND "last_name"=$19`,
        [req.body.first_name,
            req.body.last_name,
            req.body.mobile,
            req.body.email,
            req.body.address,
            req.body.city,
            req.body.zipcode,
            req.body.BD,
            req.body.img_url,
            req.body.garden_team_id,
            req.body.captain,
            req.body.committee_id,
            req.body.chair,
            req.body.membership,
            req.body.member_since,
            req.body.year_left,
            req.body.dues_paid,
            req.body.first_name,
            req.body.last_name])
            .then((results) => {
                res.send(200)
            }).catch((error) => {
                console.log('Error with server-side PUT:', error);
                res.send(500);
            })
})



module.exports = router;