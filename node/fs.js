let fs = require("fs");
// console.log(fs);

//CRUD in file 
let path = require("path");

//write method in file
// let filePath=path.join(__dirname,"file.txt");
//using writeFileSync method-it creates file if it does not exist else it overwrites.
// fs.writeFileSync(filePath,"Hello i am a text file");

//read function 
//"utf-8"is included so that output does not come in buffer 
// let content = fs.readFileSync(filePath,"utf-8");
// console.log(content);

//update function-we update the file using appendFileSync method
// console.log("Before upadate :"+ content);
//using appendFile  
// fs.appendFileSync(filePath,"\nNewly added text");
// let content2 = fs.readFileSync(filePath,"utf-8");
// console.log("After upadte :" + content2);

//delete funtion-we delete a file using fs.unlinkSync(filepath)
//----->!----->important
// fs.unlinkSync(filePath);



//CRUD in Directory 
// fs.mkdirSync("hamaridirectory");

//if condition-if the directory exists or not
// if(fs.existsSync("hamariDirectory")==false){
//     fs.mkdirSync("hamariDirectory");
// }

//reading a different  directory
//replace single slash with double
// let fileName = __dirname;
// let dircontent = fs.readdirSync(fileName);
// console.log(dircontent); 

//delete directory 
// fs.rmdirSync("hamariDirectory"); -----> only for empty directory 


//copying file to another folder
let sourcePath = path.join(__dirname,"newfile.txt");
let destinationPath = path.join(__dirname,"module","newfile.txt");
console.log(sourcePath);
console.log(destinationPath);
fs.copyFileSync(sourcePath,destinationPath);
