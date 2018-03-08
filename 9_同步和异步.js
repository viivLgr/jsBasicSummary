/**
 * 同步和异步的区别是什么
 * 同步会阻塞代码执行，而异步不会
 * alert是同步，setTimeout是异步
 */


/**
 * 同步：后一个任务等待前一个任务结束，然后再执行，程序的执行顺序与任务的排列顺序是一致的、同步的；
 */
console.log(100)
alert(200)
console.log(300)
// 100 弹出200 300

/**
 * 什么是异步：每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行后一个任务，而是执行回调函数，后一个任务则是不等前一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。
 */
console.log(100)
setTimeout(function(){
    console.log(200)
},1000)
console.log(300)
// 100  300  200
// 执行第一行，打印100
// 执行setTimeout后，传入setTimeout的函数会被暂存起来，不会立即执行（单线程的特点，不能同时干两件事）
// 执行最后一行，打印300
// 待所有程序执行完，处于空闲状态时，会立马看有没有暂存起来要执行
// 发现暂存起来的setTimeout中的函数等待封禁时间1000，就立即执行


/**
 * 前端使用异步的场景（等待的情况）（耗时很长的操作都应该异步执行）
 * 1. 定时任务：setTimeout，setInterval
 * 2. 网络请求：ajax请求，动态<img>加载
 * 3. 事件绑定
 */

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

// 关于setTimeout的笔试题
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

/**
 * 异步和单线程
 */