const fs = require("fs");
fs.writefile("student.txt","Name:Gagan garg\nRoll no. 2503201000496")
console.log("file created successfully!")
let data = fs.readFile("student.txt","utf8") ,

console.log("\nFile Content:");
console.log(data);
 