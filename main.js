document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quote-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        feedback.textContent = 'Enviando...';
        feedback.classList.remove('hidden');
        
        // Aquí conectaremos tu n8n en el siguiente paso
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        feedback.textContent = '¡Recibido! APS Platinum te contactará pronto.';
    });
});
