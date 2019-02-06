const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());



// change console.log before official launch
app.listen(4242, () => console.log('radius is LIVE on 4242 BETCHES!'))