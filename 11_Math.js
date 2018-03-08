var rd = Math.random()    // 1 > rd > 0

/**
 * 获取随机数，要求是长度一致的字符串格式
 */

var random = Math.random()
random = random + '0000000000'
random = random.slice(0, 10)
console.log(random)