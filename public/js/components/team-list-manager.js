// given add team form
// when user fills form and click add+ 
// then it add to the page team-item container and save data to local storage


export function teamListManager() {

    const teamAddForm = document.getElementById('team-add-form')

    teamAddForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('clicked submit');
        
        const teamName = document.getElementById('team-name').value
        console.log(teamName);

    })

    
}