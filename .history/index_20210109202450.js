
const express = require()
const app = express();

const PORT = process.env.PORT || 5000; //the reason we do it is for deployment

app.get('/' ,(req,res)=>{
    res.send('<h1>Hello :) </h1>')
    /*res.render('index',{
        title:'Member App :)',
        members
    });*/
});

app.listen(PORT, () => console.log(`server started on ${PORT}`));


