
function tancarModalBenvinguda() {
    document.getElementById('modalBenvinguda').classList.remove('visible');

    sessionStorage.setItem('benvinguda_mostrada', 'true');
}

window.addEventListener('DOMContentLoaded', () => {
    if (!sessionStorage.getItem('benvinguda_mostrada')) {
        document.getElementById('modalBenvinguda').classList.add('visible');
    }
});

document.getElementById('modalBenvinguda').addEventListener('click', function(e) {
    if (e.target === this) tancarModalBenvinguda();
});