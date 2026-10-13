

/**
 * 
 * 
 * 
 * @param {string} correu 
 * @returns {boolean} 
 */
function validarCorreu(correu) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(correu);
}

/**
 * 
 * 
 * @param {HTMLElement} camp 
 * @param {HTMLElement} errorEl 
 * @param {boolean} valid 
 */
function mostrarError(camp, errorEl, valid) {
    camp.classList.toggle('error', !valid);
    errorEl.classList.toggle('visible', !valid);
}


const campCorreu = document.getElementById('correu') || document.getElementById('correuContacte');
const errorCorreu = document.getElementById('errorCorreu') || document.getElementById('errorCorreuContacte');

if (campCorreu && errorCorreu) {
    
    campCorreu.addEventListener('blur', () => {
        mostrarError(campCorreu, errorCorreu, validarCorreu(campCorreu.value));
    });
}


const campContrasenya = document.getElementById('contrasenya');
const campConfirmar = document.getElementById('confirmar');
const errorConfirmar = document.getElementById('errorConfirmar');

if (campContrasenya && campConfirmar) {

    campConfirmar.addEventListener('input', () => {
        const coincideixen = campContrasenya.value === campConfirmar.value && campConfirmar.value !== '';
        mostrarError(campConfirmar, errorConfirmar, coincideixen);
    });

   
    campContrasenya.addEventListener('input', () => {
        if (campConfirmar.value !== '') {
            const coincideixen = campContrasenya.value === campConfirmar.value;
            mostrarError(campConfirmar, errorConfirmar, coincideixen);
        }
    });
}


const formulari = document.getElementById('formRegistre') || document.getElementById('formContacte');

if (formulari) {
    formulari.addEventListener('submit', (e) => {
        let valid = true;

   
        if (campCorreu && errorCorreu) {
            const correuOk = validarCorreu(campCorreu.value);
            mostrarError(campCorreu, errorCorreu, correuOk);
            if (!correuOk) valid = false;
        }


        if (campContrasenya && campConfirmar) {
            const coincideixen = campContrasenya.value === campConfirmar.value && campContrasenya.value !== '';
            mostrarError(campConfirmar, errorConfirmar, coincideixen);
            if (!coincideixen) valid = false;
        }

  
        if (!valid) e.preventDefault();
    });
}