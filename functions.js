
// function in js without parameters
function sayhello(){
    console.log('hello from function');
}

sayhello();

//addition function

function addnum(a,b){
    return(a+b);
}

console.log(addnum(4,5));

addnum(4,5);

// in java function is like public static int add(int a ,int b){}

//Storing functions,(Functions are called first class citizens as they can be stored in variables) 

let a = function sub(x,y){
           return x-y;

        }
console.log(a(10,3));

