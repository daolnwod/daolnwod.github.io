const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu_close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.counter'),
    lines = document.querySelectorAll('.stack__progress-item__scale__core');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});