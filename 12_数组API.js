/**
 * forEach 遍历所有元素
 */
var arr = [1, 2, 3]
arr.forEach(function(item, index){
    // 遍历数组的所有元素
    console.log(index, item)
})
// 0 1
// 1 2
// 2 3

/**
 * every 判断所有元素是否都符合条件
 */
var arr = [1, 2, 3, 4, 5]
var result = arr.every(function(item, index){
    // 用来判断所有的数组元素，都满足一个条件
    return item > 4
})
console.log(result) // false


/**
 * some 判断是否至少有一个元素符合条件
 */
var arr = [1, 2, 3, 4, 5]
var result = arr.some(function(item, index){
    return item < 2
})
console.log(result) // true


/**
 * sort 排序
 */

var arr = [1, 4, 2, 4, 5, 3]
var arr2 = arr.sort(function(a, b){
    // 从小到大
    // return a - b
    // 从大到小
    return b - a
})
console.log(arr2)  //  [5, 4, 4, 3, 2, 1]

/**
 * map 对元素重新组装，生成新数组
 */
var arr = [1, 2, 3, 4]
var arr2 = arr.map(function(item, index){
    return '<b>' + item + '<b>'
})
console.log(arr2) // ["<b>1<b>", "<b>2<b>", "<b>3<b>", "<b>4<b>"]

/**
 * filter 过滤符合条件的元素
 */
var arr = [1, 2, 3]
var arr2 = arr.filter(function(item, index){
    return item > 2
})
console.log(arr2) // [3]