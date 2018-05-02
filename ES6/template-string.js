// 基本用法
let str = `
<div>
    <h1 class="title">123</h1>
</div>
`;
document.querySelector('body').innerHTML = str;

// 嵌套变量的用法
let name = 'viiv'
let str = `
<div>
    <h1 class="title">welcome ${name}</h1>
</div>
`;
document.querySelector('body').innerHTML = str;

// 嵌套函数的用法
let getName = (x) => {
    return 'viiv ' + x
}
let str = `
<div>
    <h1 class="title">welcome ${getName('seek')}</h1>
</div>
`;
document.querySelector('body').innerHTML = str;

// 循环嵌套
let names = ['viiv', 'seek', '小花']
let str = `
    <ul>
    ${
        names.map(name => `<li>Hi, I am ${name}</li>`).join('')
    }
    </ul>
`
document.querySelector('body').innerHTML = str;