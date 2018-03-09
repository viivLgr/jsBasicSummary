/**
 * 如何检测浏览器的类型
 */
// navigator
var ua = navigator.userAgent;
var isChromw = ua.indexOf('Chrome')

/**
 * 拆解url的各部分
 */
location.href
location.protocol // 协议 'http:' 'https:'
location.host // 域名
location.pathname // 地址 '/learn/199'
location.search  // 参数 '?removeTooltip=%E4%B8%8'
location.hash // 

history.back() // 返回
history.forward() // 前进