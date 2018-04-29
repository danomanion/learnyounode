const fs = require('fs');
const path = require('path');

let directory = process.argv[2];
let fileExtension = `.${process.argv[3]}`;

fs.readdir(directory, function(err, files) {
  if (err) return console.error(err);
  files.forEach(function (file) {
    if (path.extname(file) === fileExtension) {
      console.log(file);
    };
  });
});
