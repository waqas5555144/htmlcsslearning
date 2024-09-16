const n1=20,n4="20";
// == this condition is work because it doest strict the number and string.
if(n1==n4){
    console.log("n1==n4:",n1==n4,"n1+n4",n1+n4)
}
// === it must exactly the same, this is not execute because n1 is number and n4 is string 
if(n1===n4){
    console.log("n1==n4:",n1==n4,"n1+n4",n1+n4)
}
console.log("working")


const firstName = "John";
const lastName = "Doe";

console.log(firstName + lastName)

let firstnum=10;
let secondnum = "20";

console.log(firstnum.toString() + Number(secondnum))
// conversion
console.log(parseInt(secondnum))



