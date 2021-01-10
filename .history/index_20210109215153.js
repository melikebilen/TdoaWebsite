const express = require('express');
const path = require('path');
var firebase = require("firebase/app");
const app = express();

const PORT = process.env.PORT || 2000; //the reason we do it is for deployment

firebaseConfig = {
    "apiKey": "AIzaSyBQjxxJqCcYhjYDH6GFwjSGdQ7VeqVGhCI",
    "authDomain": "tdoa-23cf7.firebaseapp.com",
    "projectId": "tdoa-23cf7",
    "storageBucket": "tdoa-23cf7.appspot.com",
    "messagingSenderId": "611153024504",
    "appId": "1:611153024504:web:0044eeb00f4b4d83af720d",
    "measurementId": "G-XJE676ZHYK",
    "databaseURL": "https://tdoa-23cf7-default-rtdb.firebaseio.com/"
  }

  firebase.initializeApp(firebaseConfig);

app.get('/' ,(req,res)=>{
    res.render('index');
});

app.set('view engine','ejs');

app.listen(PORT, () => console.log(`server started on ${PORT}`));

module.exports = app;

//npm run dev ile çalıştırıyoruz, nodemon, express indirdik
// takip ettiğim video : https://www.youtube.com/watch?v=L72fhGm1tfE&list=PLBrS5D_YHVCjwpc3zaepc4nbGr6tCLQHl&index=3