// Synchronous and asynchonous programming
// Synchronous programming: code is executed line by line, on
// function hello(){
//     console.log("Hello,World!");
// }
// hello();
// console.log ("This is synchronous programming");
// const hello = () => {
//     setTimeout(() => {
//         console.log("hello world");
//     }, 2000);
// }
// console.log("This is asynchronous programming");
// callback, promises, async/await
// function add(n1, n2, callback){
//     console.log(n1+n2);
//     callback();
// }
// let a=10;
// let b=20;
// add(a,b,sayHi);
// add(a,b,hello);
// add(sayHi,hello);
// function sayHi(){
//     console.log("This is the callback function")
// }
// function hello(){
//     console.log("Hello World")
// }
//create a function display (callback) "Welcome to ABES ,then call callback which print learning FSD in CSE 21."
function call(callback){
    ABES;
    FSD;
}
function ABES(){
    console.log("Welcome To ABES")
}
function FSD(){
    console.log("Learning FSD in CSE 21")
}
call();