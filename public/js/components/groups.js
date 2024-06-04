// Retrieve teams from local storage
import { teamListManager } from "./team-list-manager.js";

function getTeams() {
    const teams = JSON.parse(localStorage.getItem('teams')) || [];
    return teams;
}

let groups = {}
// Randomize teams and create groups
function randomizeTeams() {
    let teams = getTeams();
    if (teams.length < 16) {
        alert('Not enough teams to create 4 groups. Please ensure you have 16 teams.');
        return;
    }

    // Randomize teams
    for (let i = teams.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [teams[i], teams[j]] = [teams[j], teams[i]];
    }

    // Create 4 groups with 4 teams each
    const groupSize = 4
    const numberOfTeams = teams.length
    const numberOfGroups = Math.ceil(numberOfTeams / groupSize)

    for (let i = 0; i < numberOfGroups; i++) {
        const groupName = String.fromCharCode('A'.charCodeAt(0) + i)
        groups[groupName] = []
    }

    teams.forEach((team, index) => {
        const groupName = String.fromCharCode('A'.charCodeAt(0) + (index % numberOfGroups))
        groups[groupName].push({ id: team.id, name: team.name, points: 0 })
    })
    
    // const groups = [[], [], [], []];
    // for (let i = 0; i < teams.length; i++) {
    //     groups[i % 4].push(teams[i]);
    // }
    
    // Save groups to local storage
    localStorage.setItem('groups', JSON.stringify(groups));

    // Render groups in html
    renderGroups(groups);
}

// Render groups with point inputs
function renderGroups(groups) {
    const container = document.getElementById('groupsContainer');
    container.innerHTML = '';

    // Retrieve groups from local storage if they exist
    const savedGroups = JSON.parse(localStorage.getItem('groups'));

    if (savedGroups) {
        groups = savedGroups;
    } else {
        groups = {};
    }

    Object.keys(groups).forEach((groupName) => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'group';
        groupDiv.innerHTML = `<h2>Group ${groupName}</h2>`;

        groups[groupName].forEach(team => {
            const teamDiv = document.createElement('div');
            teamDiv.id = team.id
            teamDiv.innerHTML = `
                <p>${team.name}</p>
                <input type="number" name="score" min="0" max="3" value="0" class="team-points" data-team="${team}">
            `;
            groupDiv.appendChild(teamDiv);
        });

        container.appendChild(groupDiv);
    });
    
}

document.addEventListener('DOMContentLoaded', () => {
    renderGroups(groups);
});

document.getElementById('randomizeTeams').addEventListener('click', randomizeTeams);