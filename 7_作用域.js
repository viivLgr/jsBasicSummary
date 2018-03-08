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


/**
 * 创建10个<a>标签，点击的时候弹出来对应的序号
 */

// 错误写法
// 执行click的时候i的值已经变成了10
var i, a
for(i = 0; i < 10; i++){
    a = document.createElement('a');
    a.innerHTML = i + '<br>';
    a.addEventListener('click',function(e){
        e.preventDefault();
        alert(i) // 自由变量，要去父作用域(全局)获取值
    })
    document.body.appendChild(a);
}

// 正确写法!!!
var i
for(i = 0; i < 10; i++){
    (function(i){
        // 函数作用域
        var a = document.createElement('a');
        a.innerHTML = i + '<br>';
        a.addEventListener('click', function(e){
            e.preventDefault();
            alert(i) // 自由变量，父级作用域在自执行函数内，定义时保留了i值
        });
        document.body.appendChild(a);
    })(i)
}

/**
 * 如何理解作用域
 * 1. 自由变量：在当前作用域范围内没有定义的变量
 * 2. 作用域链，即自由变量的查找： 从定义的地方寻找父级作用域
 * 3. 闭包的两个场景： 函数作为返回值和函数作为参数 
 */
