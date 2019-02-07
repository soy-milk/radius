const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const cors = require('cors')
const { checkJwt, verifyLogin } = require('./middleware.js')

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors())
app.use(express.json())

app.post('/login', verifyLogin)
app.get('/', checkJwt, (req, res) => {
  res.send({ "ok": "all good" })
})
// change console.log before IPO
app.listen(4242, () => console.log('radius is LIVE on 4242 BETCHES!'))