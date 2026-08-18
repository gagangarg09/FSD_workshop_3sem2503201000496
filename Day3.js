//Promises:object
 const promiseOne=new promise((resolve,reject) =>{
    console.log("promises done");
    resolve("operation successful");
    

 })
 promiseOne.then((result)=>{
    console.log(result);
 }).catch((error)=>{
    console.log(error);

 })