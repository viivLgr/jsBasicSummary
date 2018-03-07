console.log(typeof '123') // string
console.log(typeof 123) // number
console.log(typeof false) // boolean
console.log(typeof undefined) // undefined
console.log(typeof Symbol()) // symbol
console.log(typeof []) // object
console.log(typeof {}) // object
console.log(typeof null) // object
function fn(){}
console.log(typeof fn) // function

// Numbers
typeof 37 === 'number'
typeof 3.14 === 'number'
typeof Math.LN2 === 'number'  // 以e为底2的对数， ln2 = loge2  
typeof Infinity === 'number'  // 无穷大
typeof NaN === 'number' // 尽管NaN是‘not-a-number’的缩写
typeof Number(1) === 'number' // 但不要使用这种形式！

// Strings
typeof '' === 'string'
typeof 'sd' === 'string'
typeof (typeof(1)) === 'string' // typeof总是返回一个字符串
typeof String('asd') === 'string' // 但不要用这种格式！

// Booleans
typeof true === 'boolean'
typeof false === 'boolean'
typeof Boolean(true) === 'boolean' // 但不要用这种形式！

// Symbols
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'

// Undefined
typeof undefined === 'undefined'
typeof declaredButUndefinedVariable === 'undefined' // 声明但未赋值
typeof declaredButUndefinedVariable === 'undefined' // 未声明

// Objects
typeof {a: 1} === 'object'

// 使用Array.isArray或者Object.prototype.toString.call
// 区分数组、普通对象
typeof [1,2,3] === 'object'
typeof new Date() === 'object'

// 下面的容易令人迷惑，不要使用！
typeof new Boolean(true) === 'object'
typeof new Number(1) === 'object'
typeof new String('abc') === 'object'

// 函数
typeof function(){} === 'function'
typeof class C {} === 'function'
typeof Math.sin === 'function'
typeof new Function() === 'function'


 