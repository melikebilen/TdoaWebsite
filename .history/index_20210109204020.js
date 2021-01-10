
const express = require('express');
const app = express();

const PORT = process.env.PORT || 2000; //the reason we do it is for deployment

app.get('/' ,(req,res)=>{
    res.send('<h1>Hello! :) </h1>');
    
});

app.listen(PORT, () => console.log(`server started on ${PORT}`));


