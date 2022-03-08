const cp = require('child_process');
console.log(cp);

//opening calculator 
//for linux instead of clac use gnome-calculator
cp.execFileSync("calc");
