import { createTeamItem } from "./create-team-item.js"

export function teamListManager() {

    const teamAddForm = document.getElementById('team-add-form')
    const counter= document.getElementById('teams-counter')

    const teamListKey = 'teams'


    function getTeams() {
        
        let savedTeams = localStorage.getItem(teamListKey)
        return savedTeams ? JSON.parse(savedTeams) : []
    }

    let teams = getTeams()
   

    function addTeam(teamId, teamNameValue) {

        const newTeam = {
            id: teamId,
            name: teamNameValue,
            flag: '/public/assets/flags/flag-placeholder.jpg'
        }

        teams.push(newTeam)
        localStorage.setItem(teamListKey, JSON.stringify(teams))

        createTeamItem(teamId, teamNameValue, removeTeamFromLocalStorage)
        addcounter()
    }
  

    teamAddForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const teamNameInput = document.getElementById('team-name')
        const teamNameValue = teamNameInput.value

        const teamId = Date.now()

        addTeam(teamId, teamNameValue)
        teamNameInput.value = ''
    })

    teams.forEach(team => createTeamItem(team.id, team.name, removeTeamFromLocalStorage), addcounter())
    
    
    function removeTeamFromLocalStorage(teamId) {
       
        teams = teams.filter(team => team.id !== teamId);
        localStorage.setItem(teamListKey, JSON.stringify(teams));
        addcounter() 
    }
   


    function addcounter(){
        let numbTeam = teams.length
        counter.textContent = `${numbTeam} / 16 `

    }
    

}