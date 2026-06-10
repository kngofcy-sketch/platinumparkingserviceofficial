document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema APS Platinum cargado.");

    // Manejo del formulario de contacto
    const form = document.getElementById('quote-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const feedback = document.getElementById('form-feedback');
            if (feedback) {
                feedback.textContent = '¡Enviado con éxito!';
                feedback.classList.remove('hidden');
            }
        });
    }

    // Sistema universal para cerrar ventanas/modales
    document.addEventListener('click', (e) => {
        // Busca si el clic es en un botón de cerrar
        if (e.target.matches('.close-btn')) {
            const modal = e.target.closest('.config-container');
            if (modal) {
                modal.classList.add('hidden');
            }
        }
    });
});
