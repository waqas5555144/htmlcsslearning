const data=["ahmed",200,"ali","usman",100.45]

console.log(data)
//get index 2 value
console.log(data[2])
//howmuch lengthof the array
console.log("length:",data.length)

// how to get value of usman ifyou dont knowthe index number
// in use for objectand of use for array
for(let d of data){
    //ternary operator
    d==="usman"?console.log(d):null
    // ?===if 
    //:===else
    // if(d==="usman"){
    //     console.log(d)
    // }else{
    //     null
    // }
} 
for (let i=1;i<=data.length;i++){
    const value = data[i];
    // console.log(data[i])
    value===100.45?console.log(value):null
}