const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((request, response) => {
  const requestUrl = url.parse(request.url).pathname;

  if (requestUrl === "/") {
    fs.readFile("./index.html", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("not found");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
      }

      response.end(); // untuk mengakhiri
    });
  } else if (requestUrl === "/style.css") {
    fs.readFile("./style.css", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("Ooooopsss~ Not Found");
      } else {
        response.writeHead(200, { "Content-Type": "text/css" });
        response.write(data);
      }
      response.end(); // untuk mengakhiri
    });
  } else if (requestUrl === "/data") {
    fs.readFile("./data.json", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("Ooooopsss~ Not Found");
      } else {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(data);
      }
      response.end(); // untuk mengakhiri
    });
  } else {
    response.writeHead(404);
    response.write("not found");
    response.end();
  }
});

server.listen(8080);
