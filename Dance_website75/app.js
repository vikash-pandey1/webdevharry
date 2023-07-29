const express = require("express");
const path = require("path");
const app = express();
const port = 9000;

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views ',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('index.pug',params);
})

app.listen(port,()=>{
    console.log("The application started successfully on port ${port} ")
});