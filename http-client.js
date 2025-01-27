const http = require("http");

const url = process.argv[2];

http
  .get(url, (response) => {
    response.setEncoding("utf8");
    response.on("data", (data) => {
      console.log(data);
    });

    response.on("error", (error) => {
      console.error(error);
    });
  })
  .on("error", (error) => {
    console.error("Got error: " + error.message);
  });
