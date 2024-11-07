// import http module
const http = require('http');
// import file an path module
const file = require('fs');
const path = require('path');

//create server
const server = http.createServer((req, res) => {

    file.readFile(path.join(__dirname, req.url), (error, data) => {
        if (error) {
            //set response code to 500
            res.writeHead(404);
            //send error in the respons and end the connection
            res.end ("Not found");
        } else {
            //set contnt type to html and response code to 200
            //res.writeHead(200, {"Content-Type": "text/html"});
            //send the data in the respons and end the connection
            res.end (data);
        }
    })
});
//set the servrr to listn to post 3000
server.listen(3000, () => {
    console.log("Server startd listening to localhost:3000");
});