document.addEventListener('DOMContentLoaded', () => {
    console.log("APS Platinum: Sistema cargado correctamente.");

    // Manejo del formulario de forma segura
    const form = document.getElementById('quote-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const feedback = document.getElementById('form-feedback');
            if (feedback) {
                feedback.textContent = 'Procesando...';
                feedback.classList.remove('hidden');
                
                // Simulación de envío
                await new Promise(resolve => setTimeout(resolve, 800));
                
                feedback.textContent = '¡Recibido! APS Platinum se pondrá en contacto.';
            }
        });
    }

    // Aseguramos que cualquier botón de cierre funcione si existe
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
    });
});
