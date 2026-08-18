//create one promises that will display user name and password
//using resolve and if data will be rejected its display error
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let err=true;
//         if(!err){
//             resolve("user:CSE21,password.123")
//         }else{
//             reject("ERROR....:data fail")
//         }
//     },2000)
// })
// .then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })
//asunc /await
console.log("This is async/await");
async function test(){
    console.log("1");
    await console.log("2");
    console.log("3");
    console.log("4");
    
}
test().then((res)=>).catch
console.log("6");