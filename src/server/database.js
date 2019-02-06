const { Client } = require('pg')
const db = {}
const client = new Client({
  user: 'wjp241',
  host: "clarali.cdow3ddrorlw.us-east-2.rds.amazonaws.com",
  database: 'wjp241',
  password: '12345678',
  port: 5432,
})

db.connect = async function db() {
  await client.connect()
  console.log("-------------connected--------------")
  await client.end()
}

module.exports = db;