export function showLoginModal() {
    const OpenModalButton = document.getElementById('sig-in-button');
    const loginModal = document.getElementById('login-modal');

    OpenModalButton.addEventListener('click', function() {
        if (!loginModal.classList.contains('modal--open')) {
            loginModal.classList.add('modal--open')
            
        }
        
    })
    
}

export function closeLoginModal(){
    const closeModalButton = document.getElementById('close-modal');
    const loginModal = document.getElementById('login-modal');

    closeModalButton.addEventListener('click', () => {
        if (loginModal.classList.contains('modal--open')) {
            loginModal.classList.remove('modal--open')
            
        }
        
    })
}