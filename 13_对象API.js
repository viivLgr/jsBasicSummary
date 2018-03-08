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