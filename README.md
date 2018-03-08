[GitHub地址源码地址](https://github.com/viivLgr/jsBasicSummary)
##  typeof 判断数据类型

数据分为值类型(`undefined`、`string`,`number`,`boolean`）和引用类型(对象、数组、函数、null)两大类；
`typeof` 只能区分出值类型的数据，引用类型中的对象、数组、null的结果都为`object`，函数的结果为`function`

![typeof](http://upload-images.jianshu.io/upload_images/5311449-19fbe89600c70f79.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

[typeof - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)



## 原型的5个规则
1. 所有引用类型（对象、数组、函数）都有对象的特殊属性，即可自由拓展属性（null除外）
2. 所有引用类型（对象、数组、函数）都有一个`__proto__`(隐式原型)属性，该属性是一个普通对象
3. 所有的函数都有一个`prototype`(显式原型)，该属性是一个普通对象
4. 所有的引用类型（对象、数组、函数）的`__proto__`（隐式原型）都指向它的构造函数的 `prototype`（显式原型）
5. 当试图得到一个对象的某个属性时，如果该对象本身没有这个属性，那么会去它的`__proto__`(也就是它的构造函数的`prototype`)中寻找

## 原型链

![原型链](http://upload-images.jianshu.io/upload_images/5311449-46c00464e86ace27.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

原型链：`f.toString()`在本身对象找不到，在`f.__proto__`也找不到，因为其指向的是`Foo.prototype`是一个对象，所以也有`__proto__`属性，所以就去`f.__proto__.__proto__`找

`instanceof` 就是根据原型链向上查找

![原型链](http://upload-images.jianshu.io/upload_images/5311449-f837451dbd5b2a7f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###### 所以判断一个数据是否是数组 
```
var arr = [1,2,3]
arr instanceof Array  // true
typeof arr  // object
```

## this的使用场景
> `this`要在**执行**时才能确认值，定义时无法确认 
#### 使用场景
1. 作为构造函数执行
```
function Foo(name){
    this.name = name
}
// 描述new一个对象的过程
// 1.定义一个新对象f 
// 2.将this指向这个新对象f
// 3.执行代码进行this赋值
// 4.返回this
var f = new Foo('viiv')
```
2. 作为对象属性执行
```
var obj = {
    name: 'A',
    printName: function(){
        console.log(this.name)
    }
}
obj.printName() // A
```
3. 作为普通对象执行
```
function fn(){
    console.log(this) 
}
fn() // this === window
```
4. call apply bind
```
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
```

## 执行上下文
##### 对变量提升的理解
函数声明和变量声明总是会被解释器悄悄地被"提升"到方法体的最顶部。
JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。
JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。
只有声明的变量会提升，初始化的不会

### 作用域
1. 无块级作用域
```
if(true){
  var name = 'zhangsan'
}
console.log(name)  // zhangsan


// 相当于
var name
if(true){
  name = 'zhangsan'
}
console.log(name)
```

2. 函数和全局作用域
```
// 函数的作用域在定义时决定，而不是执行时
var a = 100
function fn(){
  var a = 200
  console.log('fn', a)
}
console.log('global', a) // global 100
fn()  // fn 200
```

## 作用域链
> 当前作用域没有**定义**的变量，即“自由变量”
> 函数在哪里**定义**，自由变量的父级作用域在哪里
```
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
```

## 闭包
闭包的使用场景
1. 函数作为返回值
```
function F1(){
    var a = 100
    // 返回一个函数（函数作为返回值）
    return function (){
        console.log(a) // a是自由变量，父级作用域从#定义#的时候的作用域处寻找
    }
}

var f1 = F1()
var a = 200
f1()  // 100  从定义的地方找父级作用域
```
2. 函数作为参数来传递
```
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
```

###### 创建10个<a>标签，点击的时候弹出来对应的序号
```
var i
for(i = 0; i < 10; i++){
    (function(i){
        var a = document.createElement('a');
        a.innerHTML = i + '<br>';
        a.addEventListener('click', function(e){
            e.preventDefault();
            alert(i) // 父级作用域在自执行函数内，保留了i值
        });
        document.body.appendChild(a);
    })(i)
}
```

###### 如何理解作用域
1. 自由变量：在当前作用域范围内没有定义的变量
2. 作用域链，即自由变量的查找： 从定义的地方寻找父级作用域
3. 闭包的两个场景： 函数作为返回值和函数作为参数

######  实际开发中闭包的应用
封装变量、收敛权限
```
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
```

## 同步和异步
#### 同步和异步的区别是什么
1. 同步会阻塞代码执行，而异步不会
2. alert是同步，setTimeout是异步

```
console.log(100)
alert(200)
console.log(300)
// 100 弹出200 300


console.log(100)
setTimeout(function(){
    console.log(200)
},1000)
console.log(300)
// 100  300  200
```
#### 前端使用异步的场景
1. 定时任务：`setTimeout` `setInterval`
2. 网络请求：`ajax`请求、`<img>`图片加载
3. 事件绑定
 
```
// ajax请求示例
 console.log('start')
 $.get('../data.json', function(data1){
     console.log(data1)
 })
console.log('end')

// <img>加载示例
console.log('start')
var img = document.createElement('img')
img.onload = function(){
    console.log('loaded')
}
img.src = 'xxx.png'
console.log('end')

// 事件绑定示例
console.log('start')
document.getElementById('btn1').addEventListener('click', function(){
    console.log('clicked')
})
console.log('end')
```
######  关于setTimeout的笔试题
```
console.log(1)
setTimeout(function(){
    console.log(2)
}, 0)
console.log(3)
setTimeout(function(){
    console.log(4)
},1000)
console.log(5)
// 1 3 5 2 4
```

## 日期API
```
Date.now() === new Date().getTime() // 获取当前时间的毫秒数
var dt = new Date()
dt.getTime() // 返回 1970 年 1 月 1 日至今的毫秒数
dt.getFullYear() // 年
dt.getMonth() // 月 （0 - 11）
dt.getDate() // 日 （0 - 31）
dt.getHours() // 时 （0 - 23）
dt.getMinutes() // 分 （0 - 59）
dt.getSeconds() // 秒 （0 - 59）
```

## 数组API
forEach 遍历所有元素
```
var arr = [1, 2, 3]
arr.forEach(function(item, index){
    // 遍历数组的所有元素
    console.log(index, item)
})
// 0 1
// 1 2
// 2 3
```
 every 判断所有元素是否都符合条件
```
var arr = [1, 2, 3, 4, 5]
var result = arr.every(function(item, index){
    // 用来判断所有的数组元素，都满足一个条件
    return item > 4
})
console.log(result) // false
```
 some 判断是否至少有一个元素符合条件
```
var arr = [1, 2, 3, 4, 5]
var result = arr.some(function(item, index){
    return item < 2
})
console.log(result) // true
```
sort 排序
```
var arr = [1, 4, 2, 4, 5, 3]
var arr2 = arr.sort(function(a, b){
    // 从小到大
    // return a - b
    // 从大到小
    return b - a
})
console.log(arr2)  //  [5, 4, 4, 3, 2, 1]
```
 map 对元素重新组装，生成新数组
```
var arr = [1, 2, 3, 4]
var arr2 = arr.map(function(item, index){
    return '<b>' + item + '<b>'
})
console.log(arr2) // ["<b>1<b>", "<b>2<b>", "<b>3<b>", "<b>4<b>"]
```
filter 过滤符合条件的元素
```
var arr = [1, 2, 3]
var arr2 = arr.filter(function(item, index){
    return item > 2
})
console.log(arr2) // [3]
```


