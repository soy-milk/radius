const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/login', (req, res) => {
  console.log(req.body)
  res.send({ "hello": "boss" })
})

// change console.log before IPO
app.listen(4242, () => console.log('radius is LIVE on 4242 BETCHES!'))