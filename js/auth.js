/* ==========================================================================
   Interview Coach V3 - Auth Modal Controller
   ========================================================================== */

function openAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.add('active');
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('close-auth-modal');
    if (closeBtn) closeBtn.addEventListener('click', closeAuthModal);

    const form = document.getElementById('auth-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('auth-name').value;
            const email = document.getElementById('auth-email').value;
            AppState.setUser(name, email);
            closeAuthModal();
            updateUIStrings();
            if (typeof Router !== 'undefined') Router.renderActiveView();
        });
    }
});
