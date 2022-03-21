// console.log("hello Neel!!!")

//question-6 
//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File

// let fs = require("fs");
// let path = require("path");

// let unorgiPath = path.join(__dirname,"unorganised");
// let listContent = fs.readdirSync(unorgiPath);
// console.log(listContent);
// let arr = [];
// for(let i=0;i<listContent.length;i++){
//     let name = listContent[i];
//     let extName = path.extname(name);
//     arr.push(extName);
// }
// console.log(arr);
// let extDict = {
//     ".jpeg":"Image File",
//     ".txt":"Text File",
//     ".mp4":"Video File",
//     ".apk":"Application File",
//     ".mp3":"Audio File",
// }

// console.log(extDict[".apk"]);

// for(let i=0;i<arr.length;i++){
//     let x = arr[i];
//     console.log(extDict[x]);
// }

//#1st question
// const num = 5;
// console.log(num+5);
// let a = 6;
// a=a+num;
// console.log(num-a);

//#2nd question
// let a = 2; { let a = 3; { let a = 4; { let a = 5; console.log(a); } console.log(a); } console.log(a); } console.log(a);

//3rd question-doubt 
//  rainIndex = [ { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] }, { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] } ];

//  console.log(rainIndex.rainfall);

//4th question
// let arr = [1, 2, 3]; (function () { for (x in arr) arr.unshift(arr.pop()); console.log(arr); })();

// let randomAdder = function (arr = ["a", "b"]) { arr[arr.length * arr.length] = arr.length * arr.length; };

// randomAdder(arr); randomAdder();

// console.log(arr[9]); console.log(arr[8]);

//5th question 

// (function () { if ((-100 && 100 && "0") || [] === true || 0) { console.log(1); if ([] || (0 && false)) { console.log(2); }

// if (Infinity && NaN && "false") {
//   console.log(3);
//   if ("") {
//     console.log(4);
//   }
// } else {
//   console.log(5);
//   if (({} || false === "") && !(null && undefined)) {
//     console.log(6);
//   }
// }
// } else { console.log(7); } })();

//question-6

// let a = "This only works if and only if";

// let b = a.slice(a.indexOf("only"));

// let c = b.lastIndexOf("only");

// b[c] = "i";

// console.log(a); console.log(b);

// function f() { console.log(arguments); }

// function f(a, b) { return a + b; }

// console.log(f(2, 3, 4, 5));

// function f(x, y, z, t) { return x + y + z + t; }

// console.log(f(2, 3, 4, 5));

// console.log(a); f(2, 3, 4, 5);

// var a = 1; var a = 2; console.log(a); console.log(b); let b = 2;

// function f() { console.log(arguments); }

// let obj = {"concept":""};

// console.log( JSON.parse( JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12) ).concept );




// let a;

// console.log(a);

// function A() { let a = 2; console.log(a);

// function C() { console.log(a);

// function D() {
//   console.log(a);

//   a = 2;
// }
// D();
// a = 3;
// } C(); }

// function B() { let a; console.log(a);

// function E() { a = 6; console.log(a);

// }

// a = 2; E(); console.log(a); }

// function F() { console.log(a); a = 2; }

// a = 3;

// F(); B(); A();



//Sample Output: [ { name: "Roorkee", avgRainfall: 5.714285714285714 }, { name: "Pauri", avgRainfall: 2.2857142857142856 }, ];

arr = [ { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] }, { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] }, ];


let sum=0;
let count=0;
for(let i =0;i<arr.length;i++){
    for(let j=0;j<arr[i].rainfall.length;j++){
        sum += arr[i].rainfall[j];
        count++;
        

    }
    let avgRainfall=sum/count;
    arr[i].rainfall=avgRainfall;
    sum=0;
    count=0;
    

}

console.log(arr);


// test question decimal to binary 

//  let n = 45;
//  while(n!=0){
//      let x = parseInt(n%2);
//      console.log(x);
//      n=parseInt(n/2);
//  }


// let stri="not picking"

// function spoon(stringify){
//     let x =stringify.split(" ");
    
//     let temp = x[0][0];
//     console.log(temp);
//     x[0][0]=x[1][0];
//     x[1][0]=temp;
//     console.log(x);

// }

// spoon(stri);


