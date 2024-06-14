const http = require("http");
const url = process.argv[2];

http
  .get(url, (response) => {
    let dataString = "";

    response.on("data", (chunk) => {
      dataString += chunk;
    });

    response.on("end", () => {
      console.log(dataString.length);
      console.log(dataString);
    });

    response.on("error", console.error);
  })
  .on("error", console.error);
