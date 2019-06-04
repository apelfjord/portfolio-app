const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const util = require('util');
const cors = require('cors');

const {PORT, mongo} = require('./config'); 
const jsonData = require(mongo.dbPath)
const app = express();

app.use(cors());

app.get('/number', (req, res, next) => {
    res.send({number: 50});
})

// app.get('/mongo', (req, res, next) => {
//     const data = JSON.stringify(jsonData);
//     const db = JSON.parse(data);
//     const dbName = 'data';
//     const client = new MongoClient(mongo.url)

//     client.db()

// })

app.listen(PORT, () => {console.log('Server is running on port ' + PORT)})