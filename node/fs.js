let fs = require("fs");
console.log(fs);

//CRUD in file 
let path = require("path");

//write method in file
let filePath=path.join(__dirname,"file.txt");
//using writeFileSync method-it creates file if it does not exist else it overwrites.
fs.writeFileSync(filePath,"Hello i am a text file");

//read function 
//"utf-8"is included so that output does not come in buffer 
let content = fs.readFileSync(filePath,"utf-8");
console.log(content);

//update function-we update the file using appendFileSync method
console.log("Before upadate :"+ content);
//using appendFile  
fs.appendFileSync(filePath,"\nNewly added text");
let content2 = fs.readFileSync(filePath,"utf-8");
console.log("After upadte :" + content2);

//delete funtion-we delete a file using fs.unlinkSync(filepath)
//----->!----->important
// fs.unlinkSync(filePath);


