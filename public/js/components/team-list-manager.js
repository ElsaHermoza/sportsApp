// given add team form
// when user fills form and click add+ 
// then it add to the page team-item container and save data to local storage
import { createTeamItem } from "./create-team-item.js"

export function teamListManager() {

    const teamAddForm = document.getElementById('team-add-form')


    /**
     * When submit the form we need to
     * See if the information is on localStorage
     * Save the information to localStorage
     * Add the information to HTML 
     */
    const teamListKey = 'teams'


    // Check if data exists on localStorage or Set it
    function getTeams() {
        
        let savedTeams = localStorage.getItem(teamListKey)
        return savedTeams ? JSON.parse(savedTeams) : []
    }

    // teams variable receives the information from the getTeams Return
    let teams = getTeams()

    function addTeam(teamId, teamNameValue) {
        // Create the team Object
        // Save the team object to localStorage
        // maybe put the team on html

        const newTeam = {
            id: teamId,
            name: teamNameValue,
            flag: '/public/assets/flags/flag-placeholder.jpg'
        }

        // saving the newTeam object to the Array
        teams.push(newTeam)
        localStorage.setItem(teamListKey, JSON.stringify(teams))

        createTeamItem(teamId, teamNameValue)
    }

    // Get the form and input value
    teamAddForm.addEventListener('submit', (event) => {
        event.preventDefault();
        //console.log('clicked submit');
        
        const teamNameInput = document.getElementById('team-name')
        const teamNameValue = teamNameInput.value
        //console.log(teamName);

        const teamId = Date.now()

        addTeam(teamId, teamNameValue)
        teamNameInput.value = ''
    })

    teams.forEach(team => createTeamItem(team.id, team.name))

}