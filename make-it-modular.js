const filterFiles = require("./mymodule");
const directory = process.argv[2];
const extension = process.argv[3];

filterFiles(directory, extension, function (err, files) {
  if (err) {
    return console.error("Error:", err);
  }

  files.forEach((file) => {
    console.log(file);
  });
});
