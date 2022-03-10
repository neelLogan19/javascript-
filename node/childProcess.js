const cp = require('child_process');
// console.log(cp);

//opening calculator 
//for linux instead of clac use gnome-calculator
// cp.execFileSync("calc");


//use execFile
// cp.execSync("calc");

//printing output of test.js in childProcess.js via execSync

let content = cp.execSync("node test.js");
console.log("The output of test.js page:"+content);

//if we do this
console.log(content);
//this gives us an output which is in binary form


//conversion to string
console.log(""+content);
