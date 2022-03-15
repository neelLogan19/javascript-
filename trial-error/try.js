// console.log("hello Neel!!!")

//question-6 
//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File

let fs = require("fs");
let path = require("path");

let unorgiPath = path.join(__dirname,"unorganised");
let listContent = fs.readdirSync(unorgiPath);
console.log(listContent);
let arr = [];
for(let i=0;i<listContent.length;i++){
    let name = listContent[i];
    let extName = path.extname(name);
    arr.push(extName);
}
// console.log(arr);
let extDict = {
    ".jpeg":"Image File",
    ".txt":"Text File",
    ".mp4":"Video File",
    ".apk":"Application File",
    ".mp3":"Audio File",
}

// console.log(extDict[".apk"]);

for(let i=0;i<arr.length;i++){
    let x = arr[i];
    console.log(extDict[x]);
}