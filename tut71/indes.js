const express = require('express');
const app = express();
const port = 85;
// express epecific stuff
app.use('/static',express.static('static'))

// set the template engine as pug
app.set('views engine ','pug')

// set the views directory
app.set('views',path.join(__dirname,'views'))

// endpoing
app.get('/',(res,res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title':'pubG is the best game',content:con}
    res.statusCode(200),render('index.pug',params)
})
// app.get("/",(req,res)=>{
//     res.send("This is my first  home express app");
// });
// app.get("/about",(req,res)=>{
//     res.send("This is my first about  express app");
// });
// app.post("/about",(req,res)=>{
//     res.send("This is my first express app")
// });
app.listen(port,()=>{
    console.log('The application started successfully on port ${port}');
})