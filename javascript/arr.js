//arrays in javascript

let arr=[];
console.log(arr);
//indexing is 0 based

let arrnew= [1,2,3,4.56,"i am array"];
console.log(arrnew);

// printing particular element in array 
console.log("the element is" + arrnew[2] );

//changing element in array
 

arrnew[2]= "nothing";
console.log(arrnew);

// Arrays method

//1- push 
console.log("array before pushing"+ arrnew);
arrnew.push("i am pushed :)");
console.log("array after pushing" + arrnew);


//practice code
// let brr=[1,4,3,,6,78,4,5,7,8];
// let flag = 0;
// for(let i =0;i<brr.length;i++){
//     if(brr[i]%2==0){
//         flag=1;
//     }
// }
// if(flag==1){
//     console.log(brr[i]+"Even");
// }else{
//     console.log("odd");
// }

//2-Pop method-Removes the last element from the list
console.log("array before"+arrnew);
arrnew.pop();
console.log("array after" + arrnew);



//3- shift- Removes first element from the list
console.log("array before" + arrnew);
arrnew.shift();
console.log("array after" + arrnew);



//4- Unshift- Adds element to the start
console.log("array before" + arrnew);
arrnew.unshift("i am the new element");
console.log("array after" + arrnew);

