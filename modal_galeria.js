
/**
 * 
 * 
 * @param {string} src 
 * @param {string} alt 
 */
function obrirModal(src, alt) {
    const modal = document.getElementById('modalGaleria');
    document.getElementById('modalImg').src = src;
    document.getElementById('modalImg').alt = alt;
    modal.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function tancarModalGaleria() {
    document.getElementById('modalGaleria').classList.remove('visible');
    document.body.style.overflow = '';
}


document.getElementById('tancarModal').addEventListener('click', tancarModalGaleria);


document.getElementById('modalGaleria').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalGaleria')) tancarModalGaleria();
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') tancarModalGaleria();
});