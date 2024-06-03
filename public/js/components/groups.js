// Retrieve teams from local storage
import { teamListManager } from "./team-list-manager.js";

function getTeams() {
    const teams = JSON.parse(localStorage.getItem('teams')) || [];
    return teams;
}

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
    const groups = [[], [], [], []];
    for (let i = 0; i < teams.length; i++) {
        groups[i % 4].push(teams[i]);
    }

    // Render groups in html
    renderGroups(groups);
}

// Render groups with point inputs
function renderGroups(groups) {
    const container = document.getElementById('groupsContainer');
    container.innerHTML = '';

    groups.forEach((group, groupIndex) => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'group';
        groupDiv.innerHTML = `<h2>Group ${String.fromCharCode(65 + groupIndex)}</h2>`;

        group.forEach(team => {
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

// Save points to local storage
function savePoints() {
    const pointsInputs = document.querySelectorAll('.team-points');
    const points = {};

    pointsInputs.forEach(input => {
        const team = input.getAttribute('data-team');
        const pointsValue = parseInt(input.value);
        points[team] = pointsValue;
    });

    localStorage.setItem('teamPoints', JSON.stringify(points));
    alert('Points saved successfully!');
}

document.getElementById('randomizeTeams').addEventListener('click', randomizeTeams);
document.getElementById('savePoints').addEventListener('click', savePoints);