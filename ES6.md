## 变量
### 1. 变量和常量
```
let r = 2;
r = 4;
console.log(r)  // 4

// 常量不可修改
const pi = 3.1415926
pi = 10   //  Identifier 'pi' has already been declared
console.log(pi)
```
### 2. 不能重复定义
```
var foo = 1;
var foo = 2;
console.log(foo) // 2

// let不能重复定义
let bar = 1;
let bar = 2;   // Identifier 'bar' has already been declared
console.log(bar)
```
### 3. 块级作用域
```
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
console.log(i) // 4

for(let j = 0, jLength = arr.length; j < jLength; j++){
    // do nothing
}
console.log(j) //  j is not defined
```
### 4. 不存在变量提升
```
console.log(foo) //  foo is not defined

console.log(foo) // undefined
var foo = 1;

console.log(bar) //  bar is not defined
let bar = 1;
```

## 箭头函数
>  参数 => 表达式/语句
> 继承外层作用域
> 不能用作构造函数
> 没有prototype属性

### 1. 参数 => 表达式/语句
```
let value = 2;
let double = x => 2 * x;
let treble = x => {
    return 3 * x;
}

console.log('double:', double(value)) // 4
console.log('treble:', treble(value)); // 6
```

### 2. 继承外层作用域，没有独立作用域
```
var obj = {
    commonFn : function(){
        console.log(this);
    },
    arrowFn: () => {
        console.log(this);
    }
}
obj.commonFn(); // {commonFn: ƒ, arrowFn: ƒ}
// this 指向obj

obj.arrowFn(); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
// this 指向了obj所在的作用域，window
```

### 3. 不能用作构造函数
```
let Animal =  function(){}
let animal = new Animal();
console.log(animal) //  //Animal {}

let Fruit =  () => {} // Fruit is not a constructor
let fruit = new Fruit();
```

### 4. 没有prototype
```
let commonFn = function(){}
let arrowFn = () => {};
console.log(commonFn.prototype)  // {constructor: ƒ}
console.log(arrowFn.prototype) //  undefined
```

## 模板字符串
> 反引号标识 ``
> 支持多行字符串
> 支持变量和表达式

### 1. 基本用法
```
let str = `
<div>
    <h1 class="title">123</h1>
</div>
`;
document.querySelector('body').innerHTML = str;
```
### 2. 嵌套变量的用法
```
let name = 'viiv'
let str = `
<div>
    <h1 class="title">welcome ${name}</h1>
</div>
`;
document.querySelector('body').innerHTML = str;
```

### 3. 嵌套函数的用法
```
let getName = (x) => {
    return 'viiv ' + x
}
let str = `
<div>
    <h1 class="title">welcome ${getName('seek')}</h1>
</div>
`;
document.querySelector('body').innerHTML = str;
```

### 4. 循环嵌套
```
let names = ['viiv', 'seek', '小花']
let str = `
    <ul>
    ${
        names.map(name => `<li>Hi, I am ${name}</li>`).join('')
    }
    </ul>
`
document.querySelector('body').innerHTML = str;
```

## Promise
> Promise对象
> 关键词：resolve,  reject,  then
### 1. Promise 结构
```
new Promise((resolve, reject)=>{
    // 异步函数
    $.ajax({
        url: 'http://viivmall.viivlgr.cn/user/get_user_info.do',
        type: 'POST',
        success(res){
            resolve(res);
        },
        err(err){
            reject(err);
        }
    })
}).then((res) => {
    console.log('success:', res);
}, (err) => {
    console.log('err:', err);
});
```
### 2. 链式调用
```
var promiseFn1 = new Promise((resolve, reject)=>{
    // 异步函数
    $.ajax({
        url: 'http://viivmall.viivlgr.cn/user/get_user_info.do',
        type: 'post',
        success(res){
            resolve(res);
        },
        err(err){
            reject(err);
        }
    })
});

var promiseFn2 = new Promise((resolve, reject)=>{
    // 异步函数
    $.ajax({
        url: 'http://viivmall.viivlgr.cn/cart/get_cart_product_count.do',
        type: 'GET',
        success(res){
            resolve(res);
        },
        err(err){
            reject(err);
        }
    })
})
promiseFn1.then((res) => {
    console.log('promiseFn1 success', res)
    return promiseFn2;
}, (err) => {
    console.log('promiseFn1 fail', err)
    return promiseFn2;
}).then((res)=>{
    console.log('promiseFn2 success', res)
}, (err) => {
    console.log('promiseFn2 fail', err)
})
```
##  面向对象-类
### 类
> 关键词：class
> 语法糖，对应function
> 构造函数: constructor
```
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
```

### 类的继承
> extends: 类的继承
> super: 调用父类的构造函数
```
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
console.log(animal.getName()) // animal
console.log(cat.getName()) // cat
```

### 对象
> 对象里属性的简写
> 对象里方法的简写
> 属性名可以为表达式
```
// 之前的写法
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

// ES6写法
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
obj // {name: "viiv", age: 18, getName: ƒ, getAge: ƒ}
```
> 其他扩展
```
// 所有属性名
Object.keys(obj) // ["name", "age", "getName", "getAge"]

// extend  对象整合 (重叠覆盖)    浅拷贝
Object.assign({a: 1}, {b: 2}, obj) // {a: 1, b: 2, name: "viiv", age: 18, getName: ƒ, …}
```

## ES6模块化
> 解决一个复杂问题时，自顶向下逐层吧系统划分成若干模块的过程
> CommonJs, AMD, CMD
> 关键词：export, import

module.js
```
let str = 'str';
let obj = {
    name: 'viiv'
};
let fn = () => {
    console.log('module test')
};

export{
    str, 
    obj,
    fn
}
export default {a: 1}
```

index.js
```
import foo from './module.js'
console.log('string', string)
console.log('name', obj.name)
console.log('fn', fn)
console.log('foo',foo)
```

index.html
```
<script type="module" src="./index.js"></script>
```




