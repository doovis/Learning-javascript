const button = document.querySelector(".menu-container");
const kids = document.querySelector(".expansion");
// const kidsAll = document.querySelectorAll(".expansion");
const background = document.querySelector(".background");

button.children[0].addEventListener('click', function(){
    button.classList.toggle("expand-menu");
    kids.classList.toggle("appear-menu");
});


kids.children[0].addEventListener('click', function(){
    background.classList.remove('red', 'green', 'blue', 'reset');
    background.classList.add('red')
});

kids.children[1].addEventListener('click', function(){
    background.classList.remove('red', 'green', 'blue', 'reset');
    background.classList.add('green')
});

kids.children[2].addEventListener('click', function(){
    background.classList.remove('red', 'green', 'blue', 'reset');
    background.classList.add('blue')
});

kids.children[3].addEventListener('click', function(){
    background.classList.remove('red', 'green', 'blue', 'reset');
    background.classList.add('reset')
});

console.log(kids.parentNode.nextSibling);

// kids.childNodes.forEach(function(item) {
//     console.log(kids.children);
//     console.log(item);
// });