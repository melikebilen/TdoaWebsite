const express = require('express');
const path = require('path');
const firebase = require("firebase/app");
require('firebase/auth');
require('firebase/database');
//const functions = require('firebase-functions');
//const admin = require('firebase-admin');
const app = express();

const PORT = process.env.PORT || 2000; //the reason we do it is for deployment

var firebaseConfig = {
    apiKey: "AIzaSyBQjxxJqCcYhjYDH6GFwjSGdQ7VeqVGhCI",
    authDomain: "tdoa-23cf7.firebaseapp.com",
    databaseURL: "https://tdoa-23cf7-default-rtdb.firebaseio.com",
    projectId: "tdoa-23cf7",
    storageBucket: "tdoa-23cf7.appspot.com",
    messagingSenderId: "611153024504",
    appId: "1:611153024504:web:0f5e82fbf77d611aaf720d",
    measurementId: "G-YYER7FY9DQ"
  };

firebase.initializeApp(firebaseConfig);

var image;
var storageRef = firebase.storage().ref();
storageRef.on('value', (snapshot) => {
  image = snapshot.val();
  console.log(image);
});

  var countData;
  var count = firebase.database().ref('Count');
  count.on('value', (snapshot) => {
    countData = snapshot.val();
    console.log(countData);
  });
  var locationData;
  var allData = firebase.database().ref('RobotLocation');
  allData.on('value', async (snapshot) => {
    locationData = await snapshot.val();
    console.log(locationData);
  }); 

  var list = ['a','b','c'];

app.get('/' ,(req,res)=>{
    res.render('index',  {list:list,location: locationData, count: countData.count});
});

app.set('view engine','ejs');

app.listen(PORT, () => console.log(`server started on ${PORT}`));

module.exports = app;



//npm run dev ile çalıştırıyoruz, nodemon, express indirdik
// takip ettiğim video : https://www.youtube.com/watch?v=L72fhGm1tfE&list=PLBrS5D_YHVCjwpc3zaepc4nbGr6tCLQHl&index=3