// given add team form
// when user fills form and click add+ 
// then it add to the page team-item container and save data to local storage
import { createTeamItem } from "./create-team-item.js"

export function teamListManager() {

    const teamAddForm = document.getElementById('team-add-form')
    const counter= document.getElementById('teams-counter')


    /**
     * When submit the form we need to
     * See if the information is on localStorage
     * Save the information to localStorage
     * Add the information to HTML 
     */

    // Define a key for storing team data in local storage
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
        // put the team on html

        const newTeam = {
            id: teamId,
            name: teamNameValue,
            flag: '/public/assets/flags/flag-placeholder.jpg'
        }

        // saving the newTeam object to the Array
        teams.push(newTeam)

         // Save updated teams array to local storage
        localStorage.setItem(teamListKey, JSON.stringify(teams))

        // Create a team item in the HTML
        createTeamItem(teamId, teamNameValue, removeTeamFromLocalStorage)

        // Update the counter
        addcounter()
    }
  

    // Get the form and input value
    teamAddForm.addEventListener('submit', (event) => {
        event.preventDefault();
        //console.log('clicked submit');
        
        const teamNameInput = document.getElementById('team-name')
        const teamNameValue = teamNameInput.value
        //console.log(teamName);

        const teamId = Date.now() // Generate a unique ID for the team

        addTeam(teamId, teamNameValue)
        teamNameInput.value = '' // Clear the input field after submission
    })

    // Create team items for each team in the teams array
    teams.forEach(team => createTeamItem(team.id, team.name, removeTeamFromLocalStorage), addcounter())
    
    
    function removeTeamFromLocalStorage(teamId) {
       
        teams = teams.filter(team => team.id !== teamId);
        // console.log('nuevas equipos', teams)
        localStorage.setItem(teamListKey, JSON.stringify(teams));
        addcounter() // Update the counter after removing a team
    }
   


    function addcounter(){
        let numbTeam = teams.length
        counter.textContent = `${numbTeam} / 16 `

    }
    

}