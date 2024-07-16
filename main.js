let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function () {
        if (navbar.style.maxHeight) {
            navbar.style.maxHeight = null;
        } else {
            navbar.style.maxHeight = navbar.scrollHeight + 'px';
        }
    });
});