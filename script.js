// script.js - Общий функционал

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Мобильное меню (бургер)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // Меняем иконку (опционально)
            this.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });
    }

    // 2. Подсветка активной страницы в меню
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Если текущий путь совпадает с href ссылки (учитываем index.html)
        if (currentLocation.endsWith(linkPath) || 
            (currentLocation.endsWith('/') && linkPath === 'index.html') ||
            (currentLocation === '/' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });

    // 3. Плавный скролл для якорных ссылок (если будут)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});