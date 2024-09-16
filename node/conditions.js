const num1=10,num2=10,num3=30,num4=10
// else means it doen't go to next condition if condition is true (markaz e.g)
//if we use if condition then all true condition will run
if(num1===num2){
    console.log("num1 and num2 are equal")
}else if(num1===num3){
    console.log("num1 and num3 are equal")
}else if(num1===num4){
    console.log("num1 and num4 are equal")
}else{
    console.log("not match any condition")
}

//switch
console.log("with switch case")
switch(true){
    case num1===num2:
        console.log("num1 and num2 are equal")
    break;
    case num1===num3:
        console.log("num1 and num3 are equal")
    break;
    case num1===num4:
        console.log("num1 and num4 are equal")
    break;
    default:
        console.log("not match any condition")
    }
