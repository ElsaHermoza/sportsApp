import { modalClearLoginForm } from "./signin-form.js";

export function showLoginModal() {

    const openModalButton = document.getElementById('sign-in-button');
    const loginModal = document.getElementById('login-modal');

    modalClearLoginForm();

    openModalButton.addEventListener('click', function() {
        if (!loginModal.classList.contains('modal--open')) {
            loginModal.classList.add('modal--open');
            
        };
        
    });
    
};

export function closeLoginModal() {
    const closeModalButton = document.getElementById('close-modal');
    const loginModal = document.getElementById('login-modal');

    modalClearLoginForm();

    closeModalButton.addEventListener('click', function() {
        if (loginModal.classList.contains('modal--open')) {
            loginModal.classList.remove('modal--open');
            
        };
        
    });
};