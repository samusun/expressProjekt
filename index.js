const express = require("express")
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

const dbName = 'dataShop'
const url = `mongodb://localhost:27017/${dbName}`

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

MongoClient.connect(url, function (err, database) {
    if (err) {
      console.error("Connection error", err)
    }
    const db = database.db(dbName)
    console.log("Connected successfully to server")
})