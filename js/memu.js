let menuHtml = `
    <li class="nav-item"><a class="nav-link" href="#about">關於我</a></li>
    <li class="nav-item"><a class="nav-link" href="#projects">商品展示</a></li>
    <li class="nav-item"><a class="nav-link" href="#signup">購物車</a></li>
`;

let m = '';
m += '<li class="nav-item"><a class="nav-link" href="#about">關於我</a></li>';
m += '<li class="nav-item"><a class="nav-link" href="#projects">商品展示</a></li>';
m += '<li class="nav-item"><a class="nav-link" href="#signup">購物車</a></li>';

let menu = document.getElementById ('menu');

let menuData = [
    {
        title:'關於我',
        url:'about.html'
    },
    {
        title:'商品展示',
        url:'products.html'
    },
    {
        title:'購物車',
        url:'store.html'
    },
]

menuHtml ='';
for (let row of menuData){
    menuHtml += `<li class="nav-item"><a class="nav-link" href="#about" href="${row.url}">${row.tilte}</a></li>\n`;

    console.log(menuHtml);

menu.innerHTML = menuHtml;




}