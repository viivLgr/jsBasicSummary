// 查看cookie
document.cookie
// 添加cookie 
document.cookie = 'name=viiv;domain=viivmall.viivlgr.cn;path=/index.html;expires=Wed, 02 May 2019 09:38:46 GMT'
// 修改cookie
document.cookie = 'name=seek;domain=viivmall.viivlgr.cn;path=/index.html;'
// 删除cookie,把过期时间设置成之前的日期或0
document.cookie = 'name=seek;domain=viivmall.viivlgr.cn;path=/index.html;expires=Wed, 02 May 2018 09:38:46 GMT'