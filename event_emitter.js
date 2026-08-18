class Button extends EvenEmitter{
    click(){
        console.log("/ncall button click event")
        this.emit("click")

    }

mouseover(){
        console.log("/n call buttonn mouseover event")
        this.emit("mouseover")
    }
}

onabort(Button, ()=>{
    
})