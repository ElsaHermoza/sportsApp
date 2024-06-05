// Retrieve teams from local storage
function getTeams() {
    const teams = JSON.parse(localStorage.getItem('teams')) || [];
    return teams;
}

let groups = {}; // Initialize an empty object to store groups

// Randomize teams and create groups
function randomizeTeams() {
    let teams = getTeams();
    if (teams.length < 16) {
        alert('Not enough teams to create 4 groups. Please ensure you have 16 teams.');
        return;
    }

    // Randomize teams
    // Loop through the teams array backwards, starting from the last element and moving to the first
    for (let i = teams.length - 1; i > 0; i--) {
        // Generate a random index j
        const j = Math.floor(Math.random() * (i + 1));
        // Swap the element at index i with the element at the random index j
        [teams[i], teams[j]] = [teams[j], teams[i]];
    }

    // Create 4 groups with 4 teams each
    const groupSize = 4;
    const numberOfTeams = teams.length;
    const numberOfGroups = Math.ceil(numberOfTeams / groupSize);

    for (let i = 0; i < numberOfGroups; i++) {
        const groupName = String.fromCharCode('A'.charCodeAt(0) + i);
        groups[groupName] = []; // Creates an empty array for GroupA (GroupA: [])
    }

    teams.forEach((team, index) => {
        // Calculate the group name based on the current index and the number of groups
        const groupName = String.fromCharCode('A'.charCodeAt(0) + (index % numberOfGroups));
        groups[groupName].push({ id: team.id, name: team.name });
    });

    // Save groups to local storage
    localStorage.setItem('groups', JSON.stringify(groups));

    // Render groups in html
    renderGroups(groups);
}

// Render groups 
function renderGroups(groups) {
    const container = document.getElementById('groupsContainer');
    container.innerHTML = ''; // Clear any existing content inside the container

    // Retrieve groups from local storage if they exist
    const savedGroups = JSON.parse(localStorage.getItem('groups'));

    // If there are saved groups, use them; otherwise, initialize an empty object for groups
    if (savedGroups) {
        groups = savedGroups;
    } else {
        groups = {};
    }

    // Loop through each group in the 'groups' object
    Object.keys(groups).forEach((groupName) => {
        // Create a div element to represent the current group
        const groupDiv = document.createElement('div');
        // Set the class name for the group div
        groupDiv.className = 'group';
        // Set the HTML content for the group div, including the group name
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

        // Append the group div to the container
        container.appendChild(groupDiv);
    });
}

// Save points to local storage
function savePoints() {
    // Get all input elements with the class 'team-points'
    const pointsInputs = document.querySelectorAll('.team-points');
    // Initialize an object to store points for each group
    const groupPoints = {};

    // Initialize groupPoints
    pointsInputs.forEach(input => {
        // Get the group name associated with the input element
        const groupName = input.getAttribute('data-group-name');
        // If the group name does not exist in groupPoints, initialize it as an empty array
        if (!groupPoints[groupName]) {
            groupPoints[groupName] = [];
        }
    });

    // Collect points
    pointsInputs.forEach(input => {
        // Get team ID and group name associated with the input element
        const teamId = input.getAttribute('data-team-id');
        const groupName = input.getAttribute('data-group-name');
        // Parse the points value from the input element and convert it to an integer
        const pointsValue = parseInt(input.value);

        // Push team ID and points into the corresponding group in groupPoints
        groupPoints[groupName].push({
            id: teamId,
            points: pointsValue
        });
    });

    // Find top 2 teams per group
    const topTeams = {};
    for (let groupName in groupPoints) {
        // Sort teams in each group by points in descending order
        groupPoints[groupName].sort((a, b) => b.points - a.points);
        // Get the top 2 teams from each group
        topTeams[groupName] = groupPoints[groupName].slice(0, 2);
    }

    // Save top teams to local storage
    localStorage.setItem('topTeams', JSON.stringify(topTeams));
    alert('Top teams saved successfully!');
}

// Run this code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Call the renderGroups function to display the groups on the page
    renderGroups(groups);
});

// Attach an event listener to the element with the id 'randomizeTeams'
// When the 'randomizeTeams' button is clicked, execute the randomizeTeams function
document.getElementById('randomizeTeams').addEventListener('click', randomizeTeams);

// Attach an event listener to the element with the id 'savePoints'
// When the 'savePoints' button is clicked, execute the savePoints function
document.getElementById('savePoints').addEventListener('click', savePoints);
