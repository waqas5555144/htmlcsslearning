const str = "hello world!";
let str2 = "hello world";
var str3 = "hello world";

// str = "change"; // it can't be change,its constant variable
str2 = "change";
console.log(str2)

function hello() {
    const s = "hello"
    console.log(s)
}
hello();

// arrow function //callback function
const hello2 = ()=>{
    const s = "hello 2"
    console.log(s)
}

hello2()