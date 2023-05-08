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
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello 2';
items[1].style.fontWeight = 'bold';

//getelementbyid
var add = document.getElementsByClassName('title');
console.log(add);
for (var i = 0; i < add.length; i++) {
    add[0].style.color = 'green';
}
