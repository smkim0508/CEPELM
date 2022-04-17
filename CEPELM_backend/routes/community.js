var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise')
var dbconfig = require('./../helper/database.js');
var pool = mysql.createPool(dbconfig)

router.post('/addPost', async (req, res) => {

    let userId = req.body.userId; 
    let content = req.body.content; 
    //let userName = req.body.userName
  
    let insertPostQ = "INSERT INTO posts (writer, content) VALUES (?, ?)";
    let insertPostResult = await pool.query(insertPostQ, [userId, content]);
  
    res.json({status: "success"});
  
})


router.get('/readAllPost', async (req, res) => {

    let readAllPostQ = "SELECT * FROM posts ORDER BY date DESC";
    let readAllPostResult = await pool.query(readAllPostQ);

    res.json({status: "success", data: readAllPostResult[0]});
})
  
  module.exports = router;
  