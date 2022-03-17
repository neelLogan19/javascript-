// console.log("Hello project")

//taking input
// let input = process.argv;
// console.log(input);

// let newInput = input[2];
// console.log(newInput);

//-------------->Starting the project<--------------------------\\
//Task 1 --->Takign input
let fs = require("fs");
let path = require("path");
let folderPath = process.argv[2];

//Task2------> reading the path 
let folderExist = fs.existsSync(folderPath);

//Making extensions for different files 
let extensions={
    Image:[".jpeg",".jpg",".img",".png",".gif"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Video:[".mp4"],
    Audio:[".mp3"],
    Software:[".rar",".tar"],



}

//check 
if(folderExist==true){

    let files = fs.readdirSync(folderPath);
    for(let i=0;i<files.length;i++){
        let ext = path.extname(files[i]);
        let folderName = giveFolderName(ext);
        console.log("extesion name---->",ext,"folderName------>",folderName);


    }
    

}else{

    console.log("Enter a valid path")

}



//Makign a funtion that returns the particular folder for the specfic extension

function giveFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key];
        for(let i=0;i<extArr.length;i++){
            if(extArr[i]==ext){
                return key;
            }
        }
    }
    return "Others";
}


