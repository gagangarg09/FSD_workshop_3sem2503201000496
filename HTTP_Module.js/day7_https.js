//create your own server using HTTP module
const http=require('http');
const server=http.createserver((req,res)=>{
    res.writeHead(200, {"Content-type": "text/plan"});
    res.write("Hello Wrold");
    res.write("<h1>Welcome to my server</h1>");
    res.end();
})
 
server.listen(8000,()=>{
    console.log("server is running on port 8000")

})
