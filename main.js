document.addEventListener('DOMContentLoaded', () => {
    
    // Función para manejar envíos de formularios
    const setupForm = (formId, btnId, feedbackId) => {
        const form = document.getElementById(formId);
        const btn = document.getElementById(btnId);
        const feedback = document.getElementById(feedbackId);

        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const payload = Object.fromEntries(formData.entries());
            payload.timestamp = new Date().toISOString();

            btn.disabled = true;
            btn.textContent = 'Enviando...';
            
            try {
                // Aquí se conectará tu webhook de n8n más adelante
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                form.reset();
                feedback.textContent = '¡Información recibida con éxito!';
                feedback.className = 'feedback-msg success';
                feedback.classList.remove('hidden');
            } catch (err) {
                feedback.textContent = 'Hubo un error. Intenta de nuevo.';
                feedback.className = 'feedback-msg error';
                feedback.classList.remove('hidden');
            } finally {
                btn.disabled = false;
                btn.textContent = formId === 'quote-form' ? 'Enviar Mensaje' : 'Enviar Aplicación';
            }
        });
    };

    // Inicializar ambos formularios
    setupForm('quote-form', 'submit-btn', 'form-feedback');
    setupForm('hiring-form', 'hiring-btn', 'hiring-feedback');
});

// Función para el Modal
function togglePrivacyModal() {
    const modal = document.getElementById('privacy-modal');
    modal.classList.toggle('hidden');
    document.body.style.overflow = modal.classList.contains('hidden') ? 'auto' : 'hidden';
}
