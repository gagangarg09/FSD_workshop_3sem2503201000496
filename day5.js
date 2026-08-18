//to understand the concept of frtch in console
async function tset(){
    console.log("this is a synchronous function and we want use fetch() function ");
    const response = fetch("./student.jason");
    console.log("finally data fetch")
    const std = (await response).jason();
    console.log("Finnaly data fetch")
}
test().then(()=>{
    console.log(err);
}).catch(()=>{

})