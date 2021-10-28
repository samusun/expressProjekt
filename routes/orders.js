const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const dbName = 'dataShop';
const url = `mongodb://localhost:27017/${dbName}`;


module.exports = router