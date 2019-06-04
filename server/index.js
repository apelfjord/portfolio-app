const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const util = require("util");
const cors = require("cors");

const { PORT, mongo } = require("./config");
const dbPath = require(mongo.dbPath);
const app = express();
let data = {};


app.use(cors());

app.get("/number", (req, res, next) => {
  res.send({ number: 50 });
});

app.get("/mongo", (req, res, next) => {
    const dbName = "data";
    const client = new MongoClient(mongo.url);
    
    client.connect(err => {
        console.log("Connected to mongo server!");
        
    const db = client.db(dbName);

    fetchContent(db, () => {
      db.collection("data")
        .find({})
        .toArray((err, items) => {
          console.log(util.inspect(items, false, null, true));
          data = items;
        });
      db.collection("data").deleteMany({});
      client.close();
    });
  });

  const fetchContent = (db, cb) => {
    const collection = db.collection("data");
    collection.insertMany(dbPath, (err, result) => {
      console.log("Inserted data into the collection");
      cb(result);
    });
  };

  res.send(data)
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
