import {showLoginModal, closeLoginModal} from './components/signin-modal.js';
import { runLoginForm } from './components/signin-form.js';

document.addEventListener('DOMContentLoaded', function() {
    showLoginModal();
    closeLoginModal();
    runLoginForm();
    
});