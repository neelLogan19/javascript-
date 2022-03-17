// console.log("Hello project")

//taking input
// let input = process.argv;
// console.log(input);

// let newInput = input[2];
// console.log(newInput);

//-------------->Starting the project<--------------------------\\
//Task 1 --->Takign input
let fs = require("fs");
let folderPath = process.argv[2];

//Task2------> reading the path 
let folderExist = fs.existsSync(folderPath);

//check 
if(folderExist==true){

    let files = fs.readdirSync(folderPath);
    console.log(files);

}else{

    console.log("Enter a valid path")

}





