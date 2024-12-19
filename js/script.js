// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika nasigoreng menu di klik
document.querySelector('#nasigoreng-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar side bar untuk menghilangkan nav
const nasigoreng = document.querySelector('#nasigoreng-menu');

// Mencegah klik pada ikon Instagram menutup menu navbar
document.querySelector('.socials a[href="https://www.instagram.com/lilnotcutie/"]').addEventListener('click', function(e) {
    // Tidak ada tindakan lain yang mengganggu tautan Instagram
    e.stopPropagation();
});

document.addEventListener('click', function (e) {
    if (!nasigoreng.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
