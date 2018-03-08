/**
 * 作用域
 * 1.无块级作用域
 * 2.函数作用域和全局作用域
 */

// 1.无块级作用域
if(true){
    var name = 'zhangsan'
}
console.log(name) // zhangsan
// 等同于 推荐此方式↓↓↓
var name 
if(true){
    name = 'zhangsan'
}
console.log(name)

// 2.函数作用域和全局作用域
// 尽量不要用全局变量污染作用域
var a = 100 // 全局作用域
function fn(){
    var b = 200 // 函数作用域
    console.log(a)
    console.log(b)
}
fn()


/**
 * 作用域链
 * 当前作用域没有#定义#的变量，即“自由变量”
 * 函数在哪里#定义#，自由变量的父级作用域在哪里
 */
var a = 100
function F1(){
  var b = 200
  function F2(){
    var c = 300
    console.log(a)  // a自由变量 
    console.log(b)  // b自由变量 
    console.log(c)
  }
  F2()
}
F1()