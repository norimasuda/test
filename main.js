var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!\n');

    var d = new Date();
    console.log(d.toString() + ': Request from ' + request.connection.remoteAddress);
}).listen(3000);

console.log('Server running at port 3000');

