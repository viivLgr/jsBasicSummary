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

## 描述new 一个对象的过程

1. 创建一个新对象
2. `this`指向这个新对象
3. 执行代码，即对`this`赋值
4. 返回`this`
```
function Foo(name,age){
  this.name = name;
  this.age = age;
  this.class = 'class-1';
  // return this;
}

var f = new Foo('viiv',123);
```

###### 所以判断一个数据是否是数组 
```
var arr = [1,2,3]
arr instanceof Array  // true
typeof arr  // object
```

## 作用域

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
var a = 100
function fn(){
  var a = 200
  console.log('fn', a)
}
console.log('global', a) // global 100
fn()  // fn 200
```


