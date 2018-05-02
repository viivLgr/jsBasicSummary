// class constructor
class Animal{
    constructor(name) {
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
// 实例化
let animal = new Animal("animal test");
console.log(animal.getName()) // animal test

// 类的继承
class Animal{
    constructor() {
        this.name = 'animal';
    }
    getName(){
        return this.name;
    }
}

class Cat extends Animal{
    constructor(){
        super(); // 与Animal共享this指针
        this.name = 'cat';
    }
}

let animal = new Animal()
let cat = new Cat();
console.log(animal.getName())
console.log(cat.getName())

// 对象的用法
var name = 'viiv',
    age = 18;
var obj = {
    name: name,
    age: age,
    getName: function(){
        return this.name;
    },
    getAge: function(){
        return this.age;
    }
}

let name = 'viiv',
age = 18;
let obj = {
    // 变量名可以直接用作对象的属性名称
    name,
    age,
    // 对象里的方法可以简写
    getName(){
        return this.name;
    },
    // 表达式作为属性名或方法名
    ['get' + 'Age'](){
        return this.age;
    }
}

// Object对象的扩展
Object.keys(obj) // ["name", "age", "getName", "getAge"]
Object.assign({a: 1}, {b: 2}, obj) // {a: 1, b: 2, name: "viiv", age: 18, getName: ƒ, …}
