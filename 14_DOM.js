/**
 * DOM是哪种基本的数据结构
 * 树
 */



/**
 * DOM操作的常用API有哪些
 * 1. 获取DOM节点，以及节点的property和attribute
 * 2. 获取父节点，获取子节点
 * 3. 新增节点、删除节点
 */
var div1 = document.getElementById('div1')
// 新增节点
var p1 = document.createElement('p')
p1.innerHTML = 'this is p1'
div1.appendChild(p1) // 添加新创建的元素
// 移动已有节点
var p2 = document.getElementById('p2')
div1.appendChild(p2) // 移动 
// 获取父元素
var parent = div1.parentElement
// 获取子元素
var child = div1.childNodes
console.log(div1.childNodes[0].nodeType) // text 3 空字符串是3
console.log(div1.childNodes[1].nodeType) // p    1 标签是1
console.log(div1.childNodes[0].nodeName) // #text
console.log(div1.childNodes[1].nodeName) // P
// 删除元素
div1.removeChild(child[0])


/**
 * DOM节点的attr和property有何区别
 * 1. attr修改的是DOM文档标签里的属性
 * 2. property修改的是js对象的属性
 */
// property修改的是js对象的属性
var div1 = document.getElementById('div1')
console.log(div1.className)
div1.className = 'abc'
console.log(className)

// attribute修改的是DOM文档标签里的属性
var p1 = document.getElemenetsByTagName('p')[0]
console.log(p1.getAttribute('data-name'))
p1.setAttribute('data-name', 'xyz')




