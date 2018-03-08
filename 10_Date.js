Date.now() === new Date().getTime() // 获取当前时间的毫秒数
var dt = new Date()
dt.getTime() // 返回 1970 年 1 月 1 日至今的毫秒数
dt.getFullYear() // 年
dt.getMonth() // 月 （0 - 11）
dt.getDate() // 日 （1 - 31）
dt.getHours() // 时 （0 - 23）
dt.getMinutes() // 分 （0 - 59）
dt.getSeconds() // 秒 （0 - 59）

/**
 * 获取2017-06-10格式的日期
 */
function formatDate(dt){
    if(!dt){
        dt = new Date()
    }
    var year = dt.getFullYear()
    var month = dt.getMonth() + 1
    month = month < 10 ? '0' + month : month
    var date = dt.getDate()
    date = date < 10 ? '0' + date : date
    return year + '-' + month + '-' + date;
}
formatDate(new Date()) // "2018-03-08"
