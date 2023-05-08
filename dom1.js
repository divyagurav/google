// console.dir(document);


// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
//headerTitle.innerHTML = 'goodbye';
header.style.borderBottom = 'solid 3px #000';

//GEYELEMENTBYCLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'pink';
// }


//getelementbyid
// var add = document.getElementsByClassName('title');
// console.log(add);
// for (var i = 0; i < add.length; i++) {
//     add[0].style.color = 'green';
// }

//GETELEMENTBYNAME
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
//li[1].textContent = 'hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';
li[2].style.backgroundColor = 'green';
for (var i = 0; i < li.length; i++) {
    li[i].style.fontWeight = 'bold';
    li[i].style.color = 'blue';
}