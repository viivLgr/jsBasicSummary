/**
 * 闭包使用场景
 * 1. 函数作为返回值
 * 2. 函数作为参数来传递
 */
// 1.函数作为返回值
function F1(){
    var a = 100
    // 返回一个函数（函数作为返回值）
    return function (){
        console.log(a) // a是自由变量，父级作用域从#定义#的时候的作用域处寻找
    }
}

var f1 = F1()
var a = 200
f1()


// 2. 函数作为参数来传递
function F1(){
    var a = 100
    return function(){
        console.log(a) // 自由变量
    }
}

var f1 = F1()
function F2(fn){
    var a = 200
    fn()
}
F2(f1); // 100  执行时候的变量从定义时找作用域

/**
 * 实际开发者闭包的应用
 * 封装变量、收敛权限
 */
function isFirstLoad(){
    var _list = [] // 封装_list，防止外部污染
    return function(id){
        if(_list.indexOf(id) >= 0){
            return false
        }else {
            _list.push(id)
            return true
        }
    }
}

var firstLoad = isFirstLoad()
firstLoad(10) // true
firstLoad(20) // true
firstLoad(10) // false