const http = require("http");
const fs = require("fs");

const port = process.argv[2];
const fileLocation = process.argv[3];

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  const readStream = fs.createReadStream(fileLocation);
  readStream.on("open", () => {
    readStream.pipe(res);
  });

  readStream.on("error", (err) => {
    res.end(err);
  });
});

server.listen(port);
