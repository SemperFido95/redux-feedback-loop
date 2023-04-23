const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// get
router.get('/', (req, res) => {
    console.log('in GET request');
    const queryText = `SELECT id, 
        feeling, 
        understanding, 
        support, 
        comments, 
        flagged,
        to_char("date", 'mm/dd/yyyy') as "date" 
        FROM feedback 
        ORDER BY id`;
    pool.query(queryText).then(result => {
        res.send(result.rows);        
    }).catch(error => {
        console.log(`Error in GET ${error}`);
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    console.log('in POST request');
    const data = req.body;
    const queryText = 
        `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)
        `;
    pool.query(queryText, [data.feeling, data.understanding, data.support, data.comments]).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(`Error in POST ${error}`);
        res.sendStatus(500);
    });
})

module.exports = router;