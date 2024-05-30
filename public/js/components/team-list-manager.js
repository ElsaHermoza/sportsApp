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
    teamCard.querySelector('.team-name').textContent = teamName;

    // Agregar funcionalidad al botón de editar
    const editButton = teamCard.querySelector('#edit');
    editButton.addEventListener('click', function() {
        teamCard.querySelector('.editInputContainer').style.display = 'block';
    });

    // Agregar funcionalidad al botón de guardar
    const saveButton = teamCard.querySelector('#save-button');
    saveButton.addEventListener('click', function() {
        const newTeamName = teamCard.querySelector('.editInput').value;
        teamCard.querySelector('.teamName').textContent = newTeamName;
        teamCard.querySelector('.editInputContainer').style.display = 'none';
    });

    // Agregar el teamCard al contenedor
    container.appendChild(newTeamCard);
});