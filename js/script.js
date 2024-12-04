// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika nasigoreng menu di klik
document.querySelector('#nasigoreng-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar side bar untuk menghilangkan nav
const nasigoreng = document.querySelector('#nasigoreng-menu');

document.addEventListener('click', function (e) {
    if (!nasigoreng.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})