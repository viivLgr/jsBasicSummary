/**
 * 5个原型规则
 * 1.所有的引用类型（对象、数组、函数）都有对象的特殊属性、即可自由拓展属性（null除外）
 * 2.所有的引用类型（对象、数组、函数）都有一个__proto__(隐式原型)属性，该属性是一个普通对象
 * 3.所有的函数都有一个prototype(显式原型)属性，该属性也是一个普通对象
 * 4.所有的引用类型（对象、数组、函数）的__proto__(隐式原型)都指向它的构造函数的prototype(显式原型)
 * 5.当查找一个对象的某一属性时，如果它本身没有这个属性，那就去它的__proto__(也就是它的构造函数的prototype)中寻找
 */

function Foo(name, age){
    this.name = name
}
Foo.prototype.alertName = function(){
    console.log('Foo',this.name)
    // alert(this.name)
}

// 创建示例
var f = new Foo('viiv')
f.printName = function(){
    console.log(this.name)
}
f.printName();
f.alertName();
f.toString();

// 动物
function Animal(){
    this.eat = function(){
        console.log('animal eat')
    }
}
// 狗
function Dog(){
    this.bark = function(){
        console.log('dog bark')
    }
}

Dog.prototype = new Animal()
var hashiqi = new Dog();
hashiqi.eat()
hashiqi.bark()