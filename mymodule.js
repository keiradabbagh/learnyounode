const fs = require("fs");
const path = require("path");

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      return callback(err);
    }

    let filteredFiles = files.filter((file) => {
      return path.extname(file) === "." + extension;
    });

    callback(null, filteredFiles);
  });
};
