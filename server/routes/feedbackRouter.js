const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// get
router.get('/', (req, res) => {
    console.log('in GET request');
    const queryText = 'SELECT * FROM feedback ORDER BY id';
    pool.query(queryText).then(result => {
        res.send(result.rows);        
    }).catch(error => {
        console.log(`Error in GET ${error}`);
        res.sendStatus(500);
    })
})




module.exports = router;