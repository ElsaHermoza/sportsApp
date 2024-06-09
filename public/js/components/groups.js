function getTeams() {
    const teams = JSON.parse(localStorage.getItem('teams')) || [];
    return teams;
}

let groups = {}; 

function randomizeTeams() {
    let teams = getTeams();
    if (teams.length < 16) {
        alert('Not enough teams to create 4 groups. Please ensure you have 16 teams.');
        return;
    }

    
    for (let i = teams.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [teams[i], teams[j]] = [teams[j], teams[i]];
    }

    
    const groupSize = 4;
    const numberOfTeams = teams.length;
    const numberOfGroups = Math.ceil(numberOfTeams / groupSize);

    for (let i = 0; i < numberOfGroups; i++) {
        const groupName = String.fromCharCode('A'.charCodeAt(0) + i);
        groups[groupName] = []; 
    }

    teams.forEach((team, index) => {
        const groupName = String.fromCharCode('A'.charCodeAt(0) + (index % numberOfGroups));
        groups[groupName].push({ id: team.id, name: team.name });
    });

    localStorage.setItem('groups', JSON.stringify(groups));

    renderGroups(groups);
}


function renderGroups(groups) {
    const container = document.getElementById('groupsContainer');
    container.innerHTML = ''; 

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
            teamDiv.id = team.id;
            teamDiv.innerHTML = `
                <p>${team.name}</p>
                <input type="number" name="score" min="0" max="3" class="team-points" data-team-id="${team.id}" data-group-name="${groupName}" value="0">
            `;
            groupDiv.appendChild(teamDiv);
        });

        container.appendChild(groupDiv);
    });
}

function savePoints() {
    const pointsInputs = document.querySelectorAll('.team-points');
    const groupPoints = {};

    pointsInputs.forEach(input => {
        const groupName = input.getAttribute('data-group-name');
        if (!groupPoints[groupName]) {
            groupPoints[groupName] = [];
        }
    });

    pointsInputs.forEach(input => {
        const teamId = input.getAttribute('data-team-id');
        const groupName = input.getAttribute('data-group-name');
        const pointsValue = parseInt(input.value);

        groupPoints[groupName].push({
            id: teamId,
            points: pointsValue
        });
    });


    const topTeams = {};
    for (let groupName in groupPoints) {
        groupPoints[groupName].sort((a, b) => b.points - a.points);
        topTeams[groupName] = groupPoints[groupName].slice(0, 2);
    }

    localStorage.setItem('topTeams', JSON.stringify(topTeams));
    alert('Top teams saved successfully!');
}


document.addEventListener('DOMContentLoaded', () => {
    renderGroups(groups);
});


document.getElementById('randomizeTeams').addEventListener('click', randomizeTeams);
document.getElementById('savePoints').addEventListener('click', savePoints);
