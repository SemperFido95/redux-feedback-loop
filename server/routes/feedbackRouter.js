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

// post responses
router.post('/', (req, res) => {
    console.log('in POST request');
    const data = req.body;
    const queryText = 
        `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
        `;
    pool.query(queryText, [data.feeling, data.understanding, data.support, data.comments]).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(`Error in POST ${error}`);
        res.sendStatus(500);
    });
})

// update flag
router.post('/:id', (req, res) => {
    const id = req.params.id;
    const checked = req.body.checked;
    const queryText = 'UPDATE feedback SET flagged = $1 WHERE id = $2;';
    pool.query(queryText, [checked, id]).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(`Error in POST ${error}`);
        res.sendStatus(500);
    });
});

// delete a response
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const queryText = 'DELETE FROM feedback WHERE id = $1;';
    pool.query(queryText, [id]).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(`Error in DELETE ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;