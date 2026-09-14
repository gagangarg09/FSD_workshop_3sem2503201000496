import http from 'http';
const server = http.createServer((req,res)) = > {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write('<h1>hello world...</h1>');
    res.writeHead(403, {'Content-Type': 'text/html'});
}