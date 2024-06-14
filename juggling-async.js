const http = require("http");
const urls = process.argv.slice(2);
const results = [];
let count = 0;

function printResults() {
  results.forEach((result) => console.log(result));
}

function httpGet(index) {
  http
    .get(urls[index], (response) => {
      let dataString = "";

      response.on("data", (chunk) => {
        dataString += chunk;
      });

      response.on("end", () => {
        results[index] = dataString;
        count++;

        if (count === urls.length) {
          printResults();
        }
      });

      response.on("error", console.error);
    })
    .on("error", console.error);
}

for (let i = 0; i < urls.length; i++) {
  httpGet(i);
}
