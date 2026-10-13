
const track = document.getElementById('sliderTrack');
const imatges = track.querySelectorAll('img');
const dotsContainer = document.getElementById('sliderDots');
let indexActual = 0;
let intervalSlider;

imatges.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Imatge ${i + 1}`);
    if (i === 0) dot.classList.add('actiu');
    dot.addEventListener('click', () => {
        anarA(i);
        reiniciarInterval();
    });
    dotsContainer.appendChild(dot);
});

/**

 * @param {number} index 
 */
function anarA(index) {
    indexActual = (index + imatges.length) % imatges.length;
    track.style.transform = `translateX(-${indexActual * 100}%)`;
    
    dotsContainer.querySelectorAll('button').forEach((dot, i) => {
        dot.classList.toggle('actiu', i === indexActual);
    });
}


document.getElementById('sliderPrev').addEventListener('click', () => {
    anarA(indexActual - 1);
    reiniciarInterval();
});
document.getElementById('sliderNext').addEventListener('click', () => {
    anarA(indexActual + 1);
    reiniciarInterval();
});


function reiniciarInterval() {
    clearInterval(intervalSlider);
    intervalSlider = setInterval(() => anarA(indexActual + 1), 4000);
}
reiniciarInterval();


track.parentElement.addEventListener('mouseenter', () => clearInterval(intervalSlider));
track.parentElement.addEventListener('mouseleave', reiniciarInterval);