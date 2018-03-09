/**
 * 描述一下cookie、sessionStorage和localStorage的区别
 */

/**
 * cookie
 * 本身用户客户端和服务器端通信，但是有本地存储的功能
 * 使用document.cookie = ... 获取和修改
 * 缺点：
 * 1. 存储量小，只有4KB
 * 2. 所有http请求都带着，会影响获取资源的效率
 * 3. 需要封装才能用document.cookie = ...
 */

/**
 * localStorage和sessionStorage
 * 1. HTML5专门为存储而设计，最大容量5M
 * 2. API简单易用 
 *      localStorage.setItem(key,value)
 *      localStorage.getItem(key)
 * 3. 区别 sessionStorage如果浏览器关掉就清理，localStorage一直存在本地
 * 4. iOS Safari 隐藏模式下，localStorage.getItem()会报错，建议使用try-catch包装
 */

