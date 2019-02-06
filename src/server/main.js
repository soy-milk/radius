const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const db = require("./database");
const fetch = require('node-fetch');

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile("/Users/brianhon/github/Projects/radius/build/index.html")
});

app.use(express.static('build'))

app.post("/jobs", (req, res) => {
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
    });

})

app.use(cookieParser());

app.post('/login', (req, res) => {
  console.log(req.body)
  res.send({ "hello": "boss" })
})

// change console.log before IPO
app.listen(4242, () => console.log('radius is LIVE on 4242 BETCHES!'))