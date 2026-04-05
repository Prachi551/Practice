// javascript is dyanamically typed language. It means that you don't have to specify the data type of a variable when you declare it. The data type is determined at runtime based on the value assigned to the variable. For example:   
// let x = 10; // x is a number
// x = "Hello"; // x is now a string
// console.log("hello world");
// let a=67
// console.log(a);
// let 78a=90
// console.log(78a); // this will give an error because variable names cannot start with a number
// let _a=90
// console.log(_a); // this is valid because variable names can start with an underscore
// let $a=90
// console.log($a); // this is valid because variable names can start with a dollar sign   

// var let const in javascript:
// var is globally scoped while let and const are block scoped.
// var can be updated and redeclared within its scope
// let can be updated but not redeclared within its scope
// const can neither be updated nor redeclared within its scope. It must be initialized at the time of declaration.

// let b ="hello"
// let b=7
// console.log(b); (gives error)

// let b="hello"
// let c=7
// {
//     let b=90
//     console.log(b);

// }
// console.log(b);
// var a=7
// var a=90
// console.log(a);

// nn bb ss u primitives in javascript:
// let a = null;
// let b= 345;
// let c= true;
// let d=BigInt("567") + BigInt("123");
// let e= "hello world";
// let f= Symbol("I am a symbol");
// let g= undefined;
// console.log(a,b,c,d,e,f,g);

// objects in javascript:(non primitive)
// const item={
//     "Harry":true,
//     "Shubham":false,
//     "Rohan":67
// }
// console.log(item["Harry"]);


// let a="hello" 
// let b = 50 
// console.log(a+b);
// console.log(typeof(a));

// let a=10;
// let b=4;
// console.log("a+b",a+b);
// console.log("a=b",a-b);
// console.log("a*b",a*b);
// console.log("a/b",a/b);
// console.log("a%b",a%b);
// console.log("a**b",a**b);   45
// console.log("++a",++a); // pre increment
// console.log("a++",a++); // post increment
// console.log("--a",--a);
// console.log("a--",a--);
// 1. arithmetic operators: +, -, *, /, %, **, ++, --
// 2. assignment operators: =, +=, -=, *=, /=, %=, **=
// 3. comparison operators: ==, ===, !=, !==, >, <, >=, <=
// 4. logical operators: &&, ||, !
// 5. bitwise operators: &, |, ^, ~, <<, >>, >>>

let a = prompt("heyy whats your age?")
console.log(typeof a)
a=Number.parseInt(a) 
console.log(typeof a)
if(a<0){
    alert("this is a not a valid age");
}
else if(a<9){
    alert("you are a kid and you cannot even think of driving");

}
else if(a<18 && a>=9){
    alert("you are a kid and you can think of driving after 18");
}
else{
    alert("this is a valid age"); 

}





