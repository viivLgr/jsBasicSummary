/**
 * new一个对象的过程
 * 1.创建一个新对象
 * 2.this指向这个新对象
 * 3.执行代码，即对this赋值
 * 4.返回this
 */
function Foo(name,age){
    this.name = name;
    this.age = age;
    this.class = 'class-1'
    // return this
}
var f = new Foo('viiv', 12);