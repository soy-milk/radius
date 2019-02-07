const express = require('express');
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const cors = require('cors')
const { checkJWT, verifyLogin, sendJWT, createUser } = require('./middleware.js')
const client = require("./database");
const fetch = require('node-fetch');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.static('build'))
app.use(express.static(path.join(__dirname, "./src/client")))

app.get("/", (req, res) => {
  res.sendFile("./index.html")
})


app.post("/jobs", (req, res) => {
  console.log("req.body", req.body)
  function urlStr(str) {
    var newStr = "";
    var a = str.split(" ");
    for (let i = 0; i < a.length; i++) {
      i !== a.length - 1 ? newStr += a[i] + "+" : newStr += a[i]
    }
    return newStr;
  }
  let loc = urlStr(req.body.strings)
  let url = `https://jobs.github.com/positions.json?utf8=%E2%9C%93&description=&location=${loc}`
  console.log(url)

  fetch(url)
    .then(res => res.json())
    .then(json => {
      // console.log("-------------------JSON From the Server---------------------", json)  
      res.send(json)
    }).catch(err => {
      throw (err)
    });
})

app.post('/login', verifyLogin, sendJWT)
app.post('/signup', createUser)
app.get('/jwttest', checkJWT, (req, res) => {
  res.send({ "ok": "all good" })
})
// change console.log before IPO
app.listen(4242, () => console.log('radius is LIVE on 4242 BETCHES!'))