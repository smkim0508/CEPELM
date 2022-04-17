var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise')
var dbconfig = require('./../helper/database.js');
var pool = mysql.createPool(dbconfig)
//var db = require('mysql2-promise')();
 
//db.configure({
    //"host": "localhost",
   // "user": "foo",
   // "password": "bar",
   // "database": "db"
//});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', async (req, res) => {
  var getUserQ = "SELECT * FROM users";
  var result = await pool.query(getUserQ);
  res.json({status : "success", data : result[0]});

})

router.get('/profile/:userId', async (req, res) => {
  var getUserInfoQ = "SELECT * FROM users WHERE id = ?";
  var getUserInfoResult = await pool.query(getUserInfoQ, [req.params.userId]);
  res.json({status: "success", data: getUserInfoResult[0]});
})

router.post('/signup', async (req, res) => {

  let realName = req.body.realName; 
  let email = req.body.email; 
  let password = req.body.password;

  let insertMessageQ = "INSERT INTO users (realname, email, password) VALUES (?, ?, ?)";
  let insertMessageResult = await pool.query(insertMessageQ, [realName, email, password]);

  res.json({status: "success"});

})

router.post('/signin', async (req, res) => {
  let email_req = req.body.email; 
  let password_req = req.body.password;
  
  //res.header("Access-Control-Allow-Origin", "*");

  console.log (email_req);
  console.log (password_req);

  let loadMessageQ = "SELECT * FROM users WHERE email = ? AND password = ?";
  let loadMessageResult = await pool.query(loadMessageQ, [email_req, password_req]);

  //let loadMessageQ = "SELECT * FROM users WHERE email =" + email_req + "AND password =" + password_req;
  //let loadMessageResult = await pool.query(loadMessageQ);

  //console.log (loadMessageQ); // to test if query working properly
  console.log (loadMessageResult);
  //console.log(loadMessageResult[0]); 
  
  if (loadMessageResult[0].length > 0){
    res.json({status: "success", data: loadMessageResult[0]});
  }
  else {
    res.json({status: "fail"});
  }

})

module.exports = router;


