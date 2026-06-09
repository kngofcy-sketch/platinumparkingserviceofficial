document.addEventListener('DOMContentLoaded', () => {
    // Función para manejar el formulario de contacto/cotización
    const form = document.getElementById('quote-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const feedback = document.getElementById('form-feedback');
            if (feedback) {
                feedback.textContent = 'Enviando...';
                feedback.classList.remove('hidden');
                
                // Aquí se conectará tu webhook de n8n más adelante
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                feedback.textContent = '¡Recibido! APS Platinum te contactará pronto.';
            }
        });
    }
});

// Función para el Modal de Privacidad (si lo sigues usando)
function togglePrivacyModal() {
    const modal = document.getElementById('privacy-modal');
    if (modal) {
        modal.classList.toggle('hidden');
        document.body.style.overflow = modal.classList.contains('hidden') ? 'auto' : 'hidden';
    }
}
