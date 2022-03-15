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
// let sourcePath = path.join(__dirname,"newfile.txt");
// let destinationPath = path.join(__dirname,"module","newfile.txt");
// console.log(sourcePath);
// console.log(destinationPath);
// fs.copyFileSync(sourcePath,destinationPath);

//Questions-dev

//------------1-----------

//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

// if(fs.existsSync("newfolder")==false){
//     fs.mkdirSync("newfolder");
// }

// let newFileName = path.join(__dirname,"newfolder","newcontent.txt");

// fs.writeFileSync(newFileName,"hello i am the first file for question 1");


//question 2 
// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type

// let arr=["audio","video","image","software","documents","applications","other"];

// for(let i=1;i<=arr.length-1;i++){
//     console.log(arr[i]);
// }

// for(let i=0;i<=arr.length-1;i++){
//     if(fs.existsSync(arr[i])==false){
//         fs.mkdirSync(arr[i]);
//     }
// }

// for(let i=0;i<2;i++){
//     if(arr[i]=="audio"){
//         for(let j=1;j<=4;j++){
//             let x = "audio"+j+".mp3";
//             let z = path.join(__dirname,"audio",x)
//             fs.writeFileSync(z,"this is a audiofile")
//         }
    
        
//     }else if(arr[i]=="video"){
//         for(let j=1;j<=4;j++){
//             let y = "video"+j+".mp4";
//             let o = path.join(__dirname,"video",y)
            
//             fs.writeFileSync(o,"this is a videofile")
//         }
// }
// }


// let i = 1;
// console.log("audio"+i);

//------>Question 3 


// if(fs.existsSync("html")==false){
//         fs.mkdirSync("html");
// }

// let sourcepath = path.join(__dirname,)
// let fipath = "C:\\Users\\Neel\\Desktop\\fjp-6\\module1";
// let sourcePath = path.join(fipath,"index.html");
// let destinationPath = path.join(__dirname,"html","index.html");
// fs.copyFileSync(sourcePath,destinationPath);


//questioin-4
// read content of unorganised folder and make  an array 
//which has extension name of each file
// let fileName = "C:\\Users\\Neel\\Desktop\\fjp-6\\module1";
// let dirContent = fs.readdirSync(fileName);
// let arr = [];
// for(let i=0;i<dirContent.length;i++){
//         let newName= dirContent[i]
//         
//         let eName = path.extname(newName);
//         arr.push(eName);
// }
// console.log(arr);

// question 4 
// let arr=["audi","vide","imag","softwar","document","application","othe"];
// let nameArr=["abc","xyz","cvb","ubu"];
// let extArr=[".mp3",".mp4",".jpg",".exe",".pdf",".apk",".rar"];

// let organisePath = path.join(__dirname,"orgainse");
// if(fs.existsSync("organise")==false){
//         fs.mkdirSync("orgainse");
// }

// for(let i=0;i<arr.length;i++){
//         let folderKaPath=path.join(organisePath,arr[i]);
//         if(fs.existsSync(folderKaPath)==false){
//                 fs.mkdirSync(folderKaPath);
//         }
// }

//contd.....

//question 3 - (".."- used to go back from directory )

// let newFile= path.join(__dirname,"..","html");
// if(fs.existsSync(newFile)==false){
//         fs.mkdirSync(newFile);
// }


// let sourcePath = path.join(__dirname,"..","..","module1","index.html");
// let destinationPath = path.join(__dirname,"..","html","index.html")
// fs.copyFileSync(sourcePath,destinationPath);

///--------------> 


//move file - question number 5






//question-6 
//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File


















