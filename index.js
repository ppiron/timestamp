const express = require('express');
const app = express();
const port = process.env.port || 3000;
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://ppiron:8bpcKCXu8Ef61ebm@cluster0-shard-00-00-qe630.mongodb.net:27017,cluster0-shard-00-01-qe630.mongodb.net:27017,cluster0-shard-00-02-qe630.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"

MongoClient.connect(uri, function(err, db) {
    if (err) {
        console.log(err);
    }
    db.close();
})