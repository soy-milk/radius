const { Client } = require('pg')
const client = new Client({
  user: 'wjp241',
  host: "clarali.cdow3ddrorlw.us-east-2.rds.amazonaws.com",
  database: 'wjp241',
  password: '12345678',
  port: 5432,
})

client.connect(err => {
  if (err) throw err;
  console.log("-------------connected to PG--------------")
})

module.exports = client;


//psql -h clarali.cdow3ddrorlw.us-east-2.rds.amazonaws.com -U wjp241 --port 5432 -d wjp241 --password 12345678
