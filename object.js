//objects- similar to dictionary in pyhton 

let obneel={
    name:'Neelkanth vashist',
    age:21,
    PhoneNo:8920432940,
    address:'Palam vihar'

}

console.log(obneel);
console.log(obneel);

//captain america 
let capAmerica={
    Name:'Steve',
    age:9999,
    Friends:['Natasha','Thor','Tony stark','Steven strange'],
    Address:{
        City:"Queens",
        State:"harayana",
    },
    isAvenger:false,
    sayHi:function(){
        console.log("cap America says hi");
    },
}

console.log(capAmerica);

let mathFunc={
    addFunction:function(a,b){
        return(a+b);
    },
    subtract:function(a,b){
        return(a-b);
    },
    multiply:function(a,b){
        return(a*b);
    },
    divide:function(a,b){
        return(a/b);
    },
    simpleIntrest:function(p,r,t){
        return((p*r*t)/100);
    },
    hcf:function(a,b){
        while(a%b==0){
            let rem=a/b;
            a=b;
            b=rem;
        }
        return b;
    }
}

console.log(mathFunc);

//accessing particular keys 
console.log(capAmerica.Name);

//accessing arrays in obejct
console.log(capAmerica.Friends);
console.log(capAmerica.Friends[2]);

//calling funtions in objects
console.log(capAmerica.sayHi());

//accessing objects in objects
console.log(capAmerica.Address.City);

//calling function in object which have parameters
console.log(mathFunc.hcf(6,4));

//adding a key to capAmerica object
capAmerica.Movies=["Winter soldier"];
console.log(capAmerica);

//deleting a key

delete capAmerica.Movies;
console.log(capAmerica);

//changing a key 
capAmerica.isAvenger=true;
console.log(capAmerica);

//2 ways to access object keys 
console.log(capAmerica.Name);
console.log(capAmerica['Name']);