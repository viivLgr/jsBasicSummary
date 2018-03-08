console.log(a) // undefined
var a = 10

fn('zhangsan')

function fn(name){
    // 函数声明 会提升

    console.log(this)
    age = 20
    console.log(name, age)
    var age

    bar(100)
    function bar(num){
        console.log(num)
    }
}

var fn1 = function(){
    // 函数表达式
}

/** 
 * 对变量提升的理解
 * 1. 变量定义
 * 2. 函数声明（注意和函数表达式的区别）
 * 
 * 函数声明和变量声明总是会被解释器悄悄地被"提升"到方法体的最顶部。
 * 
 * JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。
 * JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。
 * 只有声明的变量会提升，初始化的不会
 */
