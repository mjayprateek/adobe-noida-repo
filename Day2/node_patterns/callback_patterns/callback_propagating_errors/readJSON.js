"use strict";

process.on('uncaughtException', (err) => { 
  console.error('This will catch at last the ' + 
    'JSON parsing exception: ' + err.message); 
  // Terminates the application with 1 (error) as exit code: 
  // without the following line, the application would continue 
  process.exit(1); 
}); 


const fs = require('fs');
function readJSON(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    let parsed;
    if(err)
    //propagate the error and exit the current function
      return callback(err);

   try {
      //parse the file contents
      parsed = JSON.parse(data);
    } catch(err) {
      //catch parsing errors
       return callback(err);
    }
   // no errors, propagate just the data
    
    callback(null, parsed);
  });
}

let cb = (err, data) => {
  if (err) {
    return;// console.error(err);
  }

  console.log(data)
};

readJSON('valid_json.json', cb); // dumps the content
readJSON('invalid_json.json', cb); // prints error (SyntaxError)
