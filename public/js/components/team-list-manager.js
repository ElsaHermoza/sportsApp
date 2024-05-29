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