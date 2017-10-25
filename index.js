'use strict';

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/test";

mongoClient.connect(url, function(err, db){
	if (err) {
		console.log("Не удается подключиться к БД");
	}
	else {
		console.log("Соединение с БД установленно");

		let collection = db.collection("test");
		
		let query1 = {name:"Anya", age:"15", n:"1"};
		let query2 = {name:"Petya", age:"16", n:"1"};
		
		collection.insert([query1, query2], function(err, res){
			console.log(res);
		});
		
		collection.update({n:"1"},{"$set":{age:"17"}}, function(err, res){
			console.log(res);
		});
		
		collection.find({n:"1"}).toArray(function(err, items) {
			  console.log(items);
		});

		collection.remove({n:"1"}, function(err, res){
			console.log(res);
		});
		
	}
	db.close();
});