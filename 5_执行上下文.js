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