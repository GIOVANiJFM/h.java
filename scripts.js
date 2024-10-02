document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
    menu.classList.toggle('active');
});

alert("Bem-vindo ao site!");
