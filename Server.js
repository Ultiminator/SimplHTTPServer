// import http module
const http = require('http');
// import file an path module
const file = require('fs');
const path = require('path');

//create server
const server = http.createServer((req, res) => {

    if (req.url === "/") {
        file.readFile(path.join(__dirname, "index.html"), (error, data) => {
            if (error) {
                //set response code to 500
                res.writeHead(500);
                //send error in the respons and end the connection
                res.end ("error while loading the page");
            } else {
                //set contnt type to html and response code to 200
                res.writeHead(200, {"Content-Type": "text/html"});
                //send the data in the respons and end the connection
                res.end (data);
            }
        })
    } else if (req.url.toLowerCase() == "/about") {
        file.readFile(path.join(__dirname, "About.html"), (error, data) => {
            if (error) {
                //set response code to 500
                res.writeHead(500);
                //send error in the respons and end the connection
                res.end ("error while loading the page");
            } else {
                //set contnt type to html and response code to 200
                res.writeHead(200, {"Content-Type": "text/html"});
                //send the data in the respons and end the connection
                res.end (data);
            }
        })
    }else if (req.url == "/styles.css") {
        file.readFile(path.join(__dirname, "styles.css"), (error, data) => {
            if (error) {
                //set response code to 500
                res.writeHead(500);
                //send error in the respons and end the connection
                res.end ("error while loading the page");
            } else {
                //set contnt type to html and response code to 200
                //res.writeHead(200, {"Content-Type": "text/html"});
                //send the data in the respons and end the connection
                res.end (data);
            }
        })
    }else {
        //set response code to 404
        res.writeHead(404);
        //send error in the respons and end the connection
        res.end ("This page was not found");
    }
});
//set the servrr to listn to post 3000
server.listen(3000, () => {
    console.log("Server startd listening to localhost:3000");
});