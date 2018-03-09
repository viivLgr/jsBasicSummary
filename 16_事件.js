/**
 * 编写一个通用的事件监听函数
 */
var btn = document.getElementById('btn1')
btn.addEventListener('click', function(event){
    console.log('clicked');
})

/**
 * 描述事件冒泡流程
 * e.stopPropagation()
 */
var p1 = document.getElementById('p1')
p1.addEventListener('click', function(e){
    e.stopPropagation()
    alert('激活')
})
document.body.addEventListener('click', function(){
    alert('取消')
})

/**
 * 代理（根据事件冒泡机制）
 * 对于无线下拉加载的图片，如何给每个图片绑定事件
 * 1. 代码简洁
 * 2. 减少浏览器内存占用
 */
var div1 = document.getElementById('div1')
div1.addEventListener('click', function(e){
    var target = e.target // 触发点
    if(target.nodeName === 'A'){
        alert(target.innerHTML)
    }
})

// selector 要代理的标签名
function bindEvent(elem, type, selector, fn){
    if(fn == null){
        fn = selector
        selector = null
    }
    elem.addEventListener(type, function(e){
        var target
        if(selector){
            // 代理
            target = e.target
            if(target.matches(selector)){ // 判断element是否匹配给定的选择器。
                fn.call(target, e)
            }
        }else{
            // 不是代理
            fn(e)
        }
    })
}

// 使用代理
var div1 = document.getElementById('div1')
bindEvent(div1, 'click', 'a', function(e){
    e.preventDefault()
    console.log(this.innerHTML)
})
// 不使用代理
var a = document.getElementById('a1')
bindEvent(div1, 'click', function(e){
    console.log(a.innerHTML)
})
