import { showLoginModal, closeLoginModal } from './components/signin-modal.js';
import { runLoginForm } from './components/signin-form.js';
import { toggleMenu } from './components/nav-menu.js';
import { teamListManager } from './components/team-list-manager.js';
import { flagsModal } from './components/flags-modal.js';





document.addEventListener('DOMContentLoaded', function() {
    
    toggleMenu();
    showLoginModal();
    closeLoginModal();
    runLoginForm();
    teamListManager();
    flagsModal();
   
});