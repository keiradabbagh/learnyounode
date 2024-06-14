const http = require("http");
const url = require("url");

const port = process.argv[2];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const iso = parsedUrl.query.iso;

  res.writeHead(200, { "Content-Type": "application/json" });

  if (pathname === "/api/parsetime") {
    const date = new Date(iso);
    const time = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
    res.end(JSON.stringify(time));
  } else if (pathname === "/api/unixtime") {
    const date = new Date(iso);
    const unixtime = {
      unixtime: date.getTime(),
    };
    res.end(JSON.stringify(unixtime));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);
