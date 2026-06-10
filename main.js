document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quote-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const fb = document.getElementById('form-feedback');
            fb.textContent = '¡Mensaje recibido!';
            fb.classList.remove('hidden');
        });
    }
});
