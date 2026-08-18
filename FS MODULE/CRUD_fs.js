import fs from 'fs';
const filename="student.txt";
async function createfile(){
    try{
        await fs.writeFile(filename,"name:gagan garg\n email:abc@gmail.com")
        console.log("file create...");
    }
    catch(err){
        console.log("Error",err.message);
    }
}
async function readFile readFile(){
    try{
        await fs.readFile()
    }
    catch(err){
        
    }
}