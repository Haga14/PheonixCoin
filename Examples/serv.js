
const express = require('express')
var cors = require('cors')
var mysql = require('mysql')
const app = express()
const port = 3000
var values = {}
var vals = []
values.vals = []

//values = JSON.parse(values);
var temp;

app.use(cors());

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
   });
app.get('/', (req, res) => { res.send(values)})

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "air"
  });

  function data () {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "SELECT * FROM DATA";
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          //values = result;//JSON.stringify(result);
          console.log(result)
          for(a in result)
          {
              temp = {"PM10": result[a].PM10, "PM25": result[a].PM25, "Date": result[a].Date, "Time": result[a].Time};
              values.vals.push(temp)
          }
          //console.log(values)
        });
      });
  }

  

app.listen(port, () => console.log(`Example app listening on port ${port}!`), data())


