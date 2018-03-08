/** 
 * this要在执行时才能确认值，定义时无法确认
 * 1. 作为构造函数执行
 * 2. 作为对象属性执行
 * 3. 作为普通对象执行
 * 4. call apply bind
*/
var a = {
    name: 'A',
    fn: function(){
        console.log(this.name)
    }
}
a.fn()   // A    this === a
a.fn.call({name: 'B'}) //  B   this === {name: 'B'}
var fn1 = a.fn
fn1() // this === window


/**
 * 1. 作为构造函数执行
 * @param {*} name 
 */
function Foo(name){
    this.name = name
}
// 1.定义一个新对象f 
// 2.将this指向这个新对象f
// 3.执行代码进行this赋值
// 4.返回this
var f = new Foo('viiv')


/** 
 * 2. 作为对象属性执行
*/
var obj = {
    name: 'A',
    printName: function(){
        console.log(this.name)
    }
}
obj.printName() // A


/**
 * 3. 作为函数执行
 */
function fn(){
    console.log(this) 
}
fn() // this === window


// 4. call apply bind
function fn1(name,age){
    alert(name + age)
    console.log(this)
}

fn1.call({x:100}, 'zhangsan')   // this === {x:100}
fn1.apply({x:100},['zhangsan',20])

// bind必须是函数表达式方式绑定this指向
var fn2 = function(name, age){
    alert(name)
    console.log(this)
}.bind({x: 1000})

fn2('zhangsan', 20) // {x:1000}


/**
 * this的几种不同的使用场景
 * 1. 作为构造函数执行
 * 2. 作为对象属性执行
 * 3. 作为普通对象执行
 * 4. call apply bind
 */