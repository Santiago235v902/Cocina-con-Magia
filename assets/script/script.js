
    // Seleccionar el elemento
    const titulo = document.querySelector('.titulo-brillante');

    // Escuchar eventos de mouse y táctil
    titulo.addEventListener('mouseenter', () => detenerAnimacion());
    titulo.addEventListener('click', () => detenerAnimacion());
    titulo.addEventListener('touchstart', () => detenerAnimacion());

    // Función para detener la animación
    function detenerAnimacion() {
        titulo.classList.add('paused');
    }
