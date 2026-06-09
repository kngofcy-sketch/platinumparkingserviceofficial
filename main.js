document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quote-form');
    const submitBtn = document.getElementById('submit-btn');
    const feedbackMsg = document.getElementById('form-feedback');

    // URL DEL WEBHOOK DE TU N8N (Pon la tuya aquí cuando la tengas)
    const N8N_WEBHOOK_URL = ''; 

    if(form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Recopilar los nuevos campos del formulario extendido
            const formData = new FormData(form);
            const payload = {
                nombre: formData.get('nombre'),
                direccion: formData.get('direccion'),
                email: formData.get('email'),
                telefono: formData.get('telefono'),
                asunto: formData.get('asunto'),
                mensaje: formData.get('mensaje'),
                timestamp: new Date().toISOString()
            };

            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            feedbackMsg.classList.add('hidden');
            feedbackMsg.className = 'feedback-msg hidden';

            try {
                if (N8N_WEBHOOK_URL === '') {
                    // Simulación local si aún no hay webhook
                    await new Promise(resolve => setTimeout(resolve, 1200));
                    console.log("Payload capturado listo para n8n:", payload);
                } else {
                    // Envío real al webhook
                    const response = await fetch(N8N_WEBHOOK_URL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    if (!response.ok) throw new Error('Error de red');
                }

                form.reset();
                feedbackMsg.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto pronto.';
                feedbackMsg.classList.add('success');
                feedbackMsg.classList.remove('hidden');

            } catch (error) {
                feedbackMsg.textContent = 'Hubo un error. Por favor, intenta de nuevo.';
                feedbackMsg.classList.add('error');
                feedbackMsg.classList.remove('hidden');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar Mensaje';
            }
        });
    }
});

// Función para abrir/cerrar la Política de Privacidad (El código nuevo)
function togglePrivacyModal() {
    const modal = document.getElementById('privacy-modal');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Evita scrollear el fondo
    } else {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restaura el scroll
    }
}
