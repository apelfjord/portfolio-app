const MongoClient = require("mongodb").MongoClient;
const util = require('util');
const url = "mongodb://localhost:27017";

const mockDb = require("./mockdata/mock.json");
const dbname = "mockdata";

const client = new MongoClient(url);

client.connect(err => {
  console.log("Connected succesfully to server!");

  const db = client.db(dbname);

  insertDocuments(db, function(e) {
    db.collection("data")
      .find({})
      .toArray((err, items) => {
        console.log(util.inspect(items, false, null, true));
      });
    db.collection("data").deleteMany({});
    client.close();
  });
});

const insertDocuments = (db, cb) => {
  const collection = db.collection("data");
  collection.insertMany(mockDb, (err, result) => {
    console.log("Inserted mock data into the collection");
    cb(result);
  });
};
