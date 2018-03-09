/**
 * 手写一个ajax，不依赖第三方库
 */
// 创建一个xhr对象
var xhr = new XMLHttpRequest() // IE低版本使用   ActiveXObject
// 设置请求方式、请求地址、是否同步
xhr.open('GET', '/api', false)
// 监听状态变化
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        // 是否完成、状态码是否为200
        alert(xhr.responseText)
    }
}
// 发送请求
xhr.send()

/**
 * readyState
 * 0 - (未初始化)还没有调用send()
 * 1 - (载入)已调用send()，正在发送请求
 * 2 - (载入完成)send()方法执行完成，已经接收到全部相应内容
 * 3 - (交互)正在解析相应内容
 * 4 - (完成)响应内容解析完成，可以在客户端调用了
 */

/**
 * status
 * 2xx - 表示成功处理请求。如200
 * 3xx - 需要重定向，浏览器直接跳转
 * 4xx - 客户端请求错误，如404  请求的地址不存在
 * 5xx - 服务器端错误
 */


/**
 * 跨域
 * 浏览器有同源策略，不允许ajax访问其它域接口
 * 跨域条件：协议、域名、端口，有一个不同就算跨域
 * http默认端口80  https默认端口443
 */

/**
 * 跨域的几种实现方式(https://segmentfault.com/a/1190000000718840)
 * 1. 三个标签允许跨域加载资源 
 *  <img> 用于打点统计，统计网站可能是其它域
 *  <link><script> 可以使用CDN，CDN的也是其它域
 *  <script> 可以用于JSONP
 * 2. JSONP (JSON with Padding):回调函数和数据
 * 3. CORS(跨域资源共享): 使用自定义的HTTP头部让浏览器与服务器进行沟通，服务器端设置http header  Access-Control-Allow-Origin
 * 4. 通过修改document.domain来跨子域
 * 5. 使用window.name来进行跨域
 * 6. 使用HTML5的window.postMessage方法跨域
 */

/**
 * JSONP原理
 * 缺点：只支持GET请求而不支持POST等其它类型的HTTP请求
 */
// 定义一个fun函数
function fun(fata) {
    console.log(data);
};
// 创建一个脚本，并且告诉后端回调函数名叫fun
var body = document.getElementsByTagName('body')[0];
var script = document.gerElement('script');
script.type = 'text/javasctipt';
script.src = 'demo.js?callback=fun';
body.appendChild(script);




























