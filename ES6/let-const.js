// 1. 变量和常量
let r = 2;
r = 4;
console.log(r)

const pi = 3.1415926
// pi = 10   //  Identifier 'pi' has already been declared
// console.log(pi)


// 2. 不能重复定义
var foo = 1;
var foo = 2;
console.log(foo)

let bar = 1;
// let bar = 2;   // Identifier 'bar' has already been declared
// console.log(bar)


// 3. 块级作用域
if(true){
    var test = 1;
}
console.log(test) // 1

if(true){
    let test2 = 1;
}
console.log(test2) // test2 is not defined

let arr = [1, 2, 3, 4]
for(var i = 0, iLength = arr.length; i < iLength; i++){
    // do nothing
}
console.log(i)
for(let j = 0, jLength = arr.length; j < jLength; j++){
    // do nothing
}
console.log(j) //  j is not defined

// 4. 不存在变量提升
console.log(foo) //  foo is not defined

console.log(foo) // undefined
var foo = 1;

console.log(bar) //  bar is not defined
let bar = 1;