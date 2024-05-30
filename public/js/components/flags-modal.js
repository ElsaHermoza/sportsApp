   export function flagsModal(){
    
    const teamFlags =  document.querySelectorAll('.team-flag');
    
    teamFlags.forEach(teamFlag => {

        teamFlag.addEventListener('click', () => {
            //event.preventDefault()
            const flagModalContainer = teamFlag.parentElement
            if (!flagModalContainer.querySelector('.flags-modal')) {
                createModal(flagModalContainer)
            }
            //createModal(flagModalContainer)
            closeFlagsModal() 
        })
    })

    function createModal() {
        const flagContainers = document.querySelectorAll('.team-info')

        flagContainers.forEach(flagContainer => {
            let newFlagModal = ` 
            
            <div class="flags-modal">
                <p>Select a flag</p>
                <button class="close-flags-modal">
                    <svg class="close:focus"  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.51472 7.51473C8.1005 6.92894 9.05025 6.92894 9.63604 7.51473L24.4853 22.364C25.0711 22.9498 25.0711 23.8995 24.4853 24.4853C23.8995 25.0711 22.9497 25.0711 22.364 24.4853L7.51472 9.63605C6.92893 9.05027 6.92893 8.10052 7.51472 7.51473Z" fill="#D6F4FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5147 24.4853C6.92891 23.8995 6.92891 22.9497 7.5147 22.364L22.3639 7.51472C22.9497 6.92893 23.8995 6.92893 24.4853 7.51472C25.071 8.1005 25.071 9.05025 24.4853 9.63604L9.63602 24.4853C9.05023 25.0711 8.10049 25.0711 7.5147 24.4853Z" fill="#D6F4FF"/>
                    </svg>
                </button>
                <div class="flags-list">
                    <img src="../public/assets/flags/flag01.jpg" alt="">
                    <img src="../public/assets/flags/flag02.jpg" alt="">
                    <img src="../public/assets/flags/flag03.jpg" alt="">
                    <img src="../public/assets/flags/flag04.jpg" alt="">
                    <img src="../public/assets/flags/flag05.jpg" alt="">
                    <img src="../public/assets/flags/flag06.jpg" alt="">
                    <img src="../public/assets/flags/flag07.jpg" alt="">
                    <img src="../public/assets/flags/flag08.jpg" alt="">
                    <img src="../public/assets/flags/flag09.jpg" alt="">
                    <img src="../public/assets/flags/flag10.jpg" alt="">
                    <img src="../public/assets/flags/flag11.jpg" alt="">
                    <img src="../public/assets/flags/flag12.jpg" alt="">
                    <img src="../public/assets/flags/flag13.jpg" alt="">
                    <img src="../public/assets/flags/flag14.jpg" alt="">
                    <img src="../public/assets/flags/flag15.jpg" alt="">
                    <img src="../public/assets/flags/flag16.jpg" alt="">
                </div>
            </div>
            `
            flagContainer.innerHTML += newFlagModal
        })
            
    }
    

    function closeFlagsModal() {
        const closeFlagsModalButton = document.querySelector('.close-flags-modal');
        console.log('button', closeFlagsModalButton);
        
        closeFlagsModalButton.addEventListener('click', function() {

            //const flagModal = document.querySelector('.flags-modal')
            //flagModal.remove()
        });
    
     };
        
     //closeFlagsModal()
}

// Use Filipe code technique to delete the modal when click close-flags-modal
/**
 * code to delete modal
 */


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

