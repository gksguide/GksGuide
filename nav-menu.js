// ====== فایل مشترک ناوبری: منوی همبرگری + انیمیشن اسکرول ======
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('site-sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    function closeMenu() {
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('show');
    }
    function openMenu() {
        if (sidebar) sidebar.classList.add('open');
        if (overlay) overlay.classList.add('show');
    }

    if (toggle && sidebar) {
        toggle.addEventListener('click', function () {
            sidebar.classList.contains('open') ? closeMenu() : openMenu();
        });
    }
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
    if (sidebar) {
        sidebar.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', closeMenu);
        });
    }

    // انیمیشن ظاهر شدن بخش‌ها هنگام اسکرول
    const revealItems = document.querySelectorAll('.reveal');
    if (revealItems.length) {
        const revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealItems.forEach(function (item) { revealObserver.observe(item); });
    }
});