const http = require('http')
const rs = require('rs')

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')
const contact = fs.readFileSync('./contact.html')
const services = fs.readFileSync('./services.html')

const server = http.createServer((req,res)=>{
    console.log(req.url)

    res.statusCode = 200;
    res.setHeader('content-Type','text/html');
    res.end(home);
});
server.listen(port,hostname,()=>{
    console.log('Server running at http://$(hostname):$(port)/');
});