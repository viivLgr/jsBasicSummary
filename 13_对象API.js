var obj = {
    x: 100,
    y: 200,
    z: 300
}
var key
for(key in obj){
    // 注意这里的 hasOwnProperty，在讲原型链的时候讲过了
    // 拿出本身的属性而不是继承来的
    if(obj.hasOwnProperty(key)){
        console.log(key, obj[key])
    }
}
// x 100
// y 200
// z 300


/**
 * 写一个能遍历对象和数组的forEach函数
 */
 function forEach(obj, fn){
     var key
     if(obj instanceof Array){
         // 数组
        obj.forEach(function(item, index){
            fn(index, item)
        })
     }else{
         // 对象
        for(key in obj){
            fn(key, obj[key])
        }
     }
 }

 var arr = [1, 2, 3]
 forEach(arr, function(index, item){
     console.log(index, item)
 })

 var obj = {x: 100, y: 200}
 forEach(obj, function(key, value){
     console.log(key, value)
 })