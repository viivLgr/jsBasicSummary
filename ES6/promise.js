// promise结构
new Promise((resolve, reject)=>{
    // 异步函数
    $.ajax({
        url: 'http://viivmall.viivlgr.cn/user/get_user_info.do',
        type: 'POST',
        success(res){
            resolve(res);
        },
        err(err){
            reject(err);
        }
    })
}).then((res) => {
    console.log('success:', res);
}, (err) => {
    console.log('err:', err);
});

// 链式promise
var promiseFn1 = new Promise((resolve, reject)=>{
    // 异步函数
    $.ajax({
        url: 'http://viivmall.viivlgr.cn/user/get_user_info.do',
        type: 'post',
        success(res){
            resolve(res);
        },
        err(err){
            reject(err);
        }
    })
});

var promiseFn2 = new Promise((resolve, reject)=>{
    // 异步函数
    $.ajax({
        url: 'http://viivmall.viivlgr.cn/cart/get_cart_product_count.do',
        type: 'GET',
        success(res){
            resolve(res);
        },
        err(err){
            reject(err);
        }
    })
})
promiseFn1.then((res) => {
    console.log('promiseFn1 success', res)
    return promiseFn2;
}, (err) => {
    console.log('promiseFn1 fail', err)
    return promiseFn2;
}).then((res)=>{
    console.log('promiseFn2 success', res)
}, (err) => {
    console.log('promiseFn2 fail', err)
})