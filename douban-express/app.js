// var createError = require('http-errors');
const express = require("express");
const fs=require("fs");
const bodyParser = require('body-parser');


const MongoClient = require("mongodb").MongoClient;
const urlDb = "mongodb://localhost:27017/";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});


app.get("/review", (req, res)=>{
  findData("review", "review", {}, res);
});

app.get("/subject/:id", (req, res)=>{
  let data = { "id":  req.params.id};
  findData("subject", "subject", data, res);
});

app.get("/review/:id", (req, res)=>{
  console.log(req.params.id);
  let data = { "id":  req.params.id};
  findData("review", "review", data, res);
});

app.get("/tag/:id", (req, res)=>{
  let id = decodeURI(req.params.id);
  findData("tag", id, {}, res);
});

app.get("/indexData/:id", (req, res)=>{
  let id = decodeURI(req.params.id);
  findData("indexData", id, {}, res);
});


app.get("/page/:id", (req, res)=>{
  let id = decodeURI(req.params.id);
  MongoClient.connect(urlDb, function (err, db) {
    if (err) throw err;
    // let section = req.path.split("/")[1];
    var dbo = db.db("page");


    let getData = (elem) => {
      let id = elem.href.split("/").slice(-2, -1)[0];
      console.log(id);
      // let data = require("./data/subject/" + id + ".json");
      var dbo = db.db("subject");
      let data;
      dbo.collection("subject")
        .find({ "id":  id},
        )
        .toArray(function (err, result) {
            // 返回集合中所有数据
            if (err) throw err;
            data = result[0];
            elem.id = id;
            elem.year = data["出版年"];
            elem.publisher = data["出版社"];
            elem.author = data["作者"];
            elem.abstract = data.introSummary;
            elem.price = data["定价"];
            elem.score = data.score;
      });

    };
    function crawl(elem) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(getData(elem))
          }, 10);
      });
    }

    dbo.collection(id)
        .find({},
        )
        .toArray(async function (err, result) {
            // 返回集合中所有数据
            if (err) throw err;
            for(let elem of result){
              elem = await crawl(elem);
            }

            console.log(result);

            db.close();
            res.json(result).end();
        });
  });
});





app.get("/search/:id", (req, res)=>{
  let info = req.params.id;
  console.log(info);
  info = decodeURIComponent(info);


  MongoClient.connect(urlDb, function (err, db) {
    if (err) throw err;
    var dbo = db.db("subject");
    dbo.collection("subject")
        .find({
            $or: [
                { "title": { $regex: info } },
                { "info": { $regex: info } },
            ],
        })
        .toArray(function (err, result) {
            // 返回集合中所有数据
            if (err) throw err;
            console.log(result);
            db.close();
            res.json(result).end();
        });
  });
});

app.post("/addcomment", (req, res)=>{
  console.log(req.body);
  let data = req.body;
  MongoClient.connect(urlDb, function (err, db) {
    if (err) throw err;
    var dbo = db.db("comment");
    // console.log(tag);
    dbo.collection("comment").insertOne(data, function (err, result) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        db.close();
        res.end();
    });
  });
});

app.post("/deletecomment", (req, res)=>{
  let data = req.body;
  MongoClient.connect(urlDb, function (err, db) {
    if (err) throw err;
    var dbo = db.db("comment");
    // console.log(tag);
    dbo.collection("comment").deleteOne(data, function (err,result) {
        if (err) throw err;
        db.close();
        res.end();
    });
  });
});
app.get("/getcomment/:id", (req, res)=>{
  let info = req.params.id;
  // console.log(info);
  // searchResult = findSearch(info);
  // console.log(searchResult);

  MongoClient.connect(urlDb, function (err, db) {
    if (err) throw err;
    var dbo = db.db("comment");
    dbo.collection("comment")
        .find({ "id":  req.params.id},
        )
        .toArray(function (err, result) {
            // 返回集合中所有数据
            if (err) throw err;
            console.log(result);
            db.close();
            res.json(result).end();
        });
  });
});

app.get("/queryID/:id", (req, res)=>{
  let info = req.params.id;

  MongoClient.connect(urlDb, function (err, db) {
    if (err) throw err;
    var dbo = db.db("account");
    dbo.collection("account")
        .find({ "id":  req.params.id},
        )
        .toArray(function (err, result) {
            // 返回集合中所有数据
            if (err) throw err;
            console.log(result);
            db.close();
            if(result.length>0){
              res.json({"success":true}).end();
            }
            else{
              res.json({"success":false}).end();
            }
        });
  });
});

app.post("/register", (req, res)=>{
  console.log(req.body);
  let data = req.body;
  MongoClient.connect(urlDb, function (err, db) {
    if (err) throw err;
    var dbo = db.db("account");
    // console.log(tag);
    dbo.collection("account").insertOne(data, function (err, result) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        db.close();
        res.end();
    });
  });
});

app.post("/login", (req, res)=>{
  console.log(req.body);
  let data = req.body;
  MongoClient.connect(urlDb, function (err, db) {
    if (err) throw err;
    var dbo = db.db("account");
    // console.log(tag);
    dbo.collection("account")
        .find({ "id":  req.body.id,
              "passward": req.body.passward,
        })
        .toArray(function (err, result) {
            // 返回集合中所有数据
            if (err) throw err;
            console.log(result);
            db.close();
            if(result.length>0){
              res.json({"success":true}).end();
            }
            else{
              res.json({"success":false}).end();
            }
        });
  });
});

app.get("/");
app.listen(8081);
module.exports = app;


function findSearch(info) {
  let searchResult = "";
  MongoClient.connect(urlDb, function (err, db) {
      if (err) throw err;
      var dbo = db.db("subject");
      dbo.collection("subject")
          .find({
              $or: [
                  { "title": { $regex: info } },
                  { "info": { $regex: info } },
              ],
          })
          .toArray(function (err, result) {
              // 返回集合中所有数据
              if (err) throw err;
              console.log(result);
              searchResult = result;
              db.close();
          });
  });
  console.log("sdfsd");
  return searchResult;
}

function findData(dbname, collection, data, res) {
  MongoClient.connect(urlDb, function (err, db) {
      if (err) throw err;
      var dbo = db.db(dbname);
      dbo.collection(collection)
          .find(data)
          .toArray(function (err, result) {
              // 返回集合中所有数据
              if (err) throw err;
              console.log(result);
              res.json(result).end();
              db.close();
          });
  });
}