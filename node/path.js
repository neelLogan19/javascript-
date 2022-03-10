"C:\Users\Neel\Desktop\fjp-6\module2\node\path.js"

let path = require("path");
// console.log(path);

//printing the extension of a path using extname
let extensionName=path.extname("C:\Users\Neel\Desktop\fjp-6\module2\node\path.js")

//printign base name of a path using basename
// let basename = path.basename("C:\Users\Neel\Desktop\fjp-6\module2\node\path.js");

// console.log(extensionName);
// console.log(basename);

//getting the path of directory and specific file 
console.log(__dirname);
console.log(__filename);

//learning about join method
let dirName=__dirname;
console.log(dirName);
let join = path.join(dirName,"test.js");
console.log(join);

