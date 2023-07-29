const fs = require("fs")
const text = fs.readFileSync("read.txt","utf-8");
p = text.replace("hello","Rohan");

console.log("The content of the file is ")
console.log(p);
console.log("")
fs.writeFileSync(text)
