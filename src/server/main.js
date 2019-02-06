const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require("./database");
const fetch = require('node-fetch');

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile("/Users/woojaepark/Desktop/radius/src/client/index.html")
});

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
    .then(json => console.log(json));


})

app.listen(4242, () => console.log('radius is LIVE on 4242 BETCHES!'))
