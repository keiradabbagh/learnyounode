const http = require("http");

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(body.toUpperCase());
    });
  } else {
    res.writeHead(405);
    res.end();
  }
});

server.listen(port);
