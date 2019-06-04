const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const util = require('util');
const cors = require('cors');

const {PORT, mongo} = require('./config'); 
const dbPath = require(mongo.dbPath)
const app = express();

app.use(cors());

app.get('/number', (req, res, next) => {
    res.send({number: 50});
})

// app.get('/mongo', (req, res, next) => {

//     const dbName = 'data';
//     const client = new MongoClient(mongo.url)

//     client.connect(err => {
//         console.log('Connected to mongo server!')

//         const db = client.db(dbname);

//         fetchContent(db, (e) => {
//             db.collection('data')
//         })
//     })

// })

app.listen(PORT, () => {console.log('Server is running on port ' + PORT)})