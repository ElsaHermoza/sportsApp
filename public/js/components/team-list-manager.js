// given add team form
// when user fills form and click add+ 
// then it add to the page team-item container and save data to local storage


export function teamListManager() {

    const teamAddForm = document.getElementById('team-add-form')

    // Get the form and input value
    teamAddForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('clicked submit');
        
        const teamName = document.getElementById('team-name').value
        console.log(teamName);

        return teamName
    })


    const teamListKey = 'teams'
    let teamArray = [
        {
        'id': 'id',
        'name': 'team name',
        'flag': '/public/assets/flags/flag-placeholder.jpg'
        }
    ]

    // Check if data exists on localStorage or Set it
    function checkLocalStorage() {
        
        let teamData = localStorage.getItem(teamListKey)

        // if doesnt exist, we stringify array, and assign array to teamData
        if(!teamData) {
            localStorage.setItem(teamListKey, JSON.stringify(teamArray))
            teamData = teamArray;
        } else {
            // if exist we parse the Original teamData and assign to team data
            teamData = JSON.parse(teamData) 
        }
        
        // return the teamData from 1 of the conditions
        console.log(teamData)
        return teamData
    }




    // Function calls
    checkLocalStorage()
}












































let newTeamCard = `
<!-- The card below(abajo) gonna be created by JS -->
<div class="team-item" id="team-test-id">
    <div class="team-card">
        <div class="team-info">
            <img src="../public/assets/flags/flag-placeholder.jpg" alt="">
            <!-- modal for flags, gonna be hidden by default -->
            <div class="flags-modal" id="flags-modal">
                <p>Select a flag</p>
                <button id="close-modal" class="close-modal">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <!-- end of flags-modal -->
            <p class="team-name">Team name test</p>
        </div>
        <div class="team-card-controls">
            <button id="edit">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.1968 9.55237L25.4478 15.8033L11.8741 29.3771L6.30082 29.9923C5.55473 30.0748 4.92436 29.444 5.00737 28.6979L5.62748 23.1207L19.1968 9.55237ZM29.314 8.6217L26.3789 5.68665C25.4634 4.77112 23.9786 4.77112 23.063 5.68665L20.3018 8.44788L26.5528 14.6989L29.314 11.9376C30.2295 11.0216 30.2295 9.53723 29.314 8.6217Z" fill="#D6F4FF" fill-opacity="0.5"/>
                    </svg>
            </button>
            <button id="delete">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.0938 6.56251H22.2344L21.7754 5.64942C21.6782 5.45421 21.5284 5.29001 21.3429 5.17528C21.1575 5.06055 20.9437 4.99985 20.7256 5.00001H15.1445C14.9269 4.99917 14.7135 5.05965 14.5287 5.1745C14.3439 5.28936 14.1952 5.45395 14.0996 5.64942L13.6406 6.56251H7.78125C7.57405 6.56251 7.37534 6.64482 7.22882 6.79133C7.08231 6.93784 7 7.13656 7 7.34376V8.90626C7 9.11346 7.08231 9.31217 7.22882 9.45869C7.37534 9.6052 7.57405 9.68751 7.78125 9.68751H28.0938C28.301 9.68751 28.4997 9.6052 28.6462 9.45869C28.7927 9.31217 28.875 9.11346 28.875 8.90626V7.34376C28.875 7.13656 28.7927 6.93784 28.6462 6.79133C28.4997 6.64482 28.301 6.56251 28.0938 6.56251ZM9.59766 27.8027C9.63492 28.3978 9.89754 28.9562 10.3321 29.3644C10.7666 29.7727 11.3403 29.9999 11.9365 30H23.9385C24.5347 29.9999 25.1084 29.7727 25.5429 29.3644C25.9775 28.9562 26.2401 28.3978 26.2773 27.8027L27.3125 11.25H8.5625L9.59766 27.8027Z" fill="#D6F4FF" fill-opacity="0.5"/>
                    </svg>
            </button>
        </div>
    </div>
    <!-- start of Edit name input and Save button box -->
    <form class="edit-team-name-container" id="edit-team-name-container">
        <input type="text" name="edit-team-name-input" id="edit-team-name-input" required>
        <input type="submit" value="Save">
    </form>
    <!-- end of Edit name input and Save button box -->
</div>
`

document.getElementById('add-team-button').addEventListener('click', function() {

    let teamsListContainer = document.getElementById('teams-list-container');

    teamsListContainer.innerHTML += newTeamCard
})
