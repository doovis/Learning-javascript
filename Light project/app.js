const background = document.querySelector(".lighting-container");
const onText = document.querySelector(".on");
const toggle = document.querySelector(".btn-toggle");

toggle.addEventListener('click', function(){
    background.classList.toggle('light-background');
    onText.classList.toggle('on-visible');
    toggle.classList.toggle('light-toggle');
});
