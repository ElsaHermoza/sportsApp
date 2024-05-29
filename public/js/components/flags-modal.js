export function showFlagsModal() {

    const openFlagsModalButton = document.getElementById('img-open-flags-modal');
    const flagsModal = document.getElementById('flags-modal');


    openFlagsModalButton.addEventListener('click', function() {
        if (!flagsModal.classList.contains('modal--open')) {
            flagsModal.classList.add('modal--open');
            
        };
        
    });
    
};

export function closeFlagsModal() {
    const closeFlagsModalButton = document.getElementById('close-flags-modal');
    const flagsModal = document.getElementById('flags-modal');

   closeFlagsModalButton.addEventListener('click', function() {
       if (flagsModal.classList.contains('modal--open')) {
            flagsModal.classList.remove('modal--open');
            console.log('hola')
        };
        
     });
 };