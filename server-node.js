const http = require("http");

const hostname = "127.0.0.1";
const port = 3131;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello!!What's up!!");
  } else if (req.url === "/greetings") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("thanks for everything");
  } else {
      res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
