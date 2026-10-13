
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    const obert = menu.classList.toggle('obert');
    hamburger.classList.toggle('actiu');
    hamburger.setAttribute('aria-expanded', obert);
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('obert');
        hamburger.classList.remove('actiu');
        hamburger.setAttribute('aria-expanded', false);
    }
});