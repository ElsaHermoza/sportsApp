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
            
        };
        
     });
 };

 //const flagsArrayModal = [ '/public/assets/flags/flag01.jpg', '/public/assets/flags/flag02.jpg', '/public/assets/flags/flag03.jpg', '/public/assets/flags/flag04.jpg', 
 //'/public/assets/flags/flag05.jpg', '/public/assets/flags/flag06.jpg', '/public/assets/flags/flag07.jpg', '/public/assets/flags/flag08.jpg', '/public/assets/flags/flag09.jpg',
 //'/public/assets/flags/flag10.jpg', '/public/assets/flags/flag11.jpg', '/public/assets/flags/flag12.jpg', '/public/assets/flags/flag13.jpg', '/public/assets/flags/flag14.jpg', 
 //'/public/assets/flags/flag15.jpg', '/public/assets/flags/flag16.jpg'
//]

const flagImages = document.querySelectorAll('.flags-modal img');

flagImages.forEach(image => {
    image.addEventListener('click', () => {
        const selectedFlagSrc = image.getAttribute('src');

        //const selectedFlagContainer = document.getElementById('team-test-id');
        //selectedFlagContainer.innerHTML = `<img src="${selectedFlagSrc}" alt="Selected Flag">`;

        // Crea un elemento de imagen - nuevo
        const selectedFlagImg = document.createElement('img');
        selectedFlagImg.setAttribute('src', selectedFlagSrc);
        selectedFlagImg.setAttribute('alt', 'Selected Flag');

        // Inserta la imagen dentro del div team-info - nuevo
        const teamInfo = document.querySelector('.team-info');
        teamInfo.appendChild(selectedFlagImg);

        //cierra la modal//
        const flagsModal = document.getElementById('flags-modal');
        flagsModal.classList.remove('active');
    });
});