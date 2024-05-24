import { showLoginModal, closeLoginModal } from './components/signin-modal.js';
import { runLoginForm } from './components/signin-form.js';
import { toggleMenu } from './components/nav-menu.js';

document.addEventListener('DOMContentLoaded', function() {
    
    toggleMenu();
    showLoginModal();
    closeLoginModal();
    runLoginForm();
    
});