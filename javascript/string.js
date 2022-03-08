let str = "neelkanth vashist";

//length of string 
let len = str.length;
console.log(len);

//Slice method

let sarr=str.slice(2,7);
console.log(sarr);


//Replace method 
let replacearr=str.replace("e","o");
console.log(replacearr);

//Upper case
let uppercase = str.toUpperCase();
console.log(uppercase);




//lowercase
let lowercase = str.toLowerCase();
console.log(lowercase);



//Concate method
let firstname = "Neelkanth";
let lastname = "vashist";
let fullname = firstname.concat(lastname);
console.log(fullname);

let fullname2 = firstname+lastname;
console.log(fullname2);

//split-Returns a array 
let splitted  = str.split('e');
console.log(splitted);
