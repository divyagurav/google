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