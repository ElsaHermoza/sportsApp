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
        localStorage.setItem(teamListKey, JSON.stringify(teams))

        createTeamItem(teamId, teamNameValue, removeTeamFromLocalStorage)
        addcounter()
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

    teams.forEach(team => createTeamItem(team.id, team.name, removeTeamFromLocalStorage), addcounter())
    
    
    function removeTeamFromLocalStorage(teamId) {
       
        teams = teams.filter(team => team.id !== teamId);
        // console.log('nuevas equipos', teams)
        localStorage.setItem(teamListKey, JSON.stringify(teams));
        addcounter()
    }
   


    function addcounter(){
        let numbTeam = teams.length
        counter.textContent = `${numbTeam} / 16 `

    }
    

}


































// Almacena el template del teamCard
let teamCardTemplate = `
    <div class="card">
        <span class="teamName"></span>
        <button class="editButton">Edit</button>
        <div class="editInputContainer" style="display:none;">
            <input type="text" class="editInput">
            <button class="saveButton">Save</button>
        </div>
    </div>
`;

// Función para agregar un nuevo equipo
//document.getElementById('button').addEventListener('click', function() {
    //const teamName = document.getElementById('enterName').value;
    //const container = document.getElementById('container');

    // Crear un nuevo div basado en el template
    //const teamCard = document.createElement('div');
    //teamCard.innerHTML = teamCardTemplate;
    //teamCard.className = 'card';

    // Agregar el nombre del equipo al span
    // teamCard.querySelector('.team-name').textContent = teamName;

    function editTeamName() {
        
    
        // Agregar funcionalidad al botón de guardar
        const saveButton = teamCard.querySelector('#save-button');
        saveButton.addEventListener('click', function() {
            const newTeamName = teamCard.querySelector('.editInput').value;
            teamCard.querySelector('.teamName').textContent = newTeamName;
            teamCard.querySelector('.edit-team-name-container').style.display = 'none';
        });
    
        // Agregar el teamCard al contenedor
        container.appendChild(newTeamCard);

    }