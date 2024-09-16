function nonBlockScope(){
    if(true){
        var a = 10;
    }
    console.log(a) //does not show error bcoz its nonblock
}
nonBlockScope()
function blockScope(){
    if(true){
        let a = 20;
    }
    console.log(a) //it show error
}
blockScope()