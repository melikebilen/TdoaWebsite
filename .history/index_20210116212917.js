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

//var database = firebase.database();

  var countData = getCount();
 console.log(countData);
 var locationDataList = getLocation();
 console.log(locationDataList);
 /*
  var locationData;
  var allData = firebase.database().ref('Location1');
  allData.on('value', (snapshot) => {
  locationData =  snapshot.val();
  console.log(locationData);
  });
*/

  async function getCount(){
    var countData;
  var count = await firebase.database().ref('Count');
  count.on('value', (snapshot) => {
    countData = snapshot.val();
    console.log(countData.count);
  });
     return countData;
  }

  async function getLocation(){
    var count = getCount();
    var locationDataList = [];
    for(var i = 0; i<count ; i++){
      var location = await firebase.database().ref('Location' + i.toString());
      location.on('value', async (snapshot) => {
      var locationData =  await snapshot.val();
      console.log(locationData);
      locationDataList.push(locationData);
    });
    }
    return locationDataList;
  }

app.get('/' ,(req,res)=>{
    res.render('index',  {count: countData.count });
});

app.set('view engine','ejs');

app.listen(PORT, () => console.log(`server started on ${PORT}`));

module.exports = app;


//npm run dev ile çalıştırıyoruz, nodemon, express indirdik
// takip ettiğim video : https://www.youtube.com/watch?v=L72fhGm1tfE&list=PLBrS5D_YHVCjwpc3zaepc4nbGr6tCLQHl&index=3