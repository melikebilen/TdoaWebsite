const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 2000; //the reason we do it is for deployment

app.get('/' ,(req,res)=>{
    res.send('<h1>Hello!!! :) </h1>');
    
});

app.listen(PORT, () => console.log(`server started on ${PORT}`));


//npm run dev ile çalıştırıyoruz, nodemon, express indirdik
// takip ettiğim video : https://www.youtube.com/watch?v=L72fhGm1tfE&list=PLBrS5D_YHVCjwpc3zaepc4nbGr6tCLQHl&index=3