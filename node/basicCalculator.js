let n = 1, m = 2;

let sum = n=4 + m;
const divide = n/m;
const multi = n*m;
const sub = n-m;
console.log("sum",sum,"div",divide,"multiply",multi,"sub",sub)



console.log("-------------------------------------------------")

const calculator =(waqas, hamil)=>{
    console.log("sum",waqas+hamil)
    console.log("sub",waqas-hamil)
    console.log("multiply",waqas*hamil)
    console.log("divide",waqas/hamil)

}
calculator(2,5)
console.log("-------------------------------------------------")
calculator(10,5)
console.log("-------------------------------------------------")

const operation=(op,n1,n2)=>{
    if(op==="sum"){
        console.log("sum: ",n1+n2)
    }
    if(op==="mul"){
        console.log("mul: ",n1*n2)
    }
}
operation("mul",10,10)

console.log("-------------------------------------------------")


// template literal
let data=10
let str = `this is the data's ${data}`

console.log(str)