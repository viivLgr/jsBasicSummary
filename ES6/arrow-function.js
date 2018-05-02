// 箭头函数

let value = 2;
let double = x => 2 * x;
let treble = x => {
    return 3 * x;
}

console.log('double:', double(value)) // 4
console.log('treble:', treble(value)); // 6

// 没有独立作用域
var obj = {
    commonFn : function(){
        console.log(this);
    },
    arrowFn: () => {
        console.log(this);
    }
}
obj.commonFn(); // {commonFn: ƒ, arrowFn: ƒ}
obj.arrowFn(); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}


// 不能用作构造函数
let Animal =  function(){}
let animal = new Animal(); 
console.log(animal)  //Animal {}

let Fruit =  () => {} // Fruit is not a constructor
let fruit = new Fruit();

// 没有prototype
let commonFn = function(){}
let arrowFn = () => {};
console.log(commonFn.prototype)  // {constructor: ƒ}
console.log(arrowFn.prototype) //  undefined