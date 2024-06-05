
export function createTeamItem(teamId, teamNameValue, removeTeamFromLocalStorage) {

    const teamsListContainer = document.getElementById('teams-list-container');

    let newTeamCard = document.createElement('div')
    newTeamCard.classList.add('team-item')
    newTeamCard.id = teamId
    newTeamCard.innerHTML = `
    <div class="team-card">
        <div class="team-info">
            <img src="../public/assets/flags/flag-placeholder.jpg" alt="">
            <p class="team-name">${teamNameValue}</p>
        </div>
        <div class="team-card-controls">
            <button class="edit-team-name">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.1968 9.55237L25.4478 15.8033L11.8741 29.3771L6.30082 29.9923C5.55473 30.0748 4.92436 29.444 5.00737 28.6979L5.62748 23.1207L19.1968 9.55237ZM29.314 8.6217L26.3789 5.68665C25.4634 4.77112 23.9786 4.77112 23.063 5.68665L20.3018 8.44788L26.5528 14.6989L29.314 11.9376C30.2295 11.0216 30.2295 9.53723 29.314 8.6217Z" fill="#D6F4FF" fill-opacity="0.5"/>
                    </svg>
            </button>
            <button class="delete-team">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.0938 6.56251H22.2344L21.7754 5.64942C21.6782 5.45421 21.5284 5.29001 21.3429 5.17528C21.1575 5.06055 20.9437 4.99985 20.7256 5.00001H15.1445C14.9269 4.99917 14.7135 5.05965 14.5287 5.1745C14.3439 5.28936 14.1952 5.45395 14.0996 5.64942L13.6406 6.56251H7.78125C7.57405 6.56251 7.37534 6.64482 7.22882 6.79133C7.08231 6.93784 7 7.13656 7 7.34376V8.90626C7 9.11346 7.08231 9.31217 7.22882 9.45869C7.37534 9.6052 7.57405 9.68751 7.78125 9.68751H28.0938C28.301 9.68751 28.4997 9.6052 28.6462 9.45869C28.7927 9.31217 28.875 9.11346 28.875 8.90626V7.34376C28.875 7.13656 28.7927 6.93784 28.6462 6.79133C28.4997 6.64482 28.301 6.56251 28.0938 6.56251ZM9.59766 27.8027C9.63492 28.3978 9.89754 28.9562 10.3321 29.3644C10.7666 29.7727 11.3403 29.9999 11.9365 30H23.9385C24.5347 29.9999 25.1084 29.7727 25.5429 29.3644C25.9775 28.9562 26.2401 28.3978 26.2773 27.8027L27.3125 11.25H8.5625L9.59766 27.8027Z" fill="#D6F4FF" fill-opacity="0.5"/>
                    </svg>
            </button>
        </div>
        <form class="edit-team-name-container">
            <input type="text" name="edit-team-name-input" required>
            <input type="submit" value="Save">
        </form>
    </div>
`

    teamsListContainer.appendChild(newTeamCard)

    newTeamCard.querySelector('.delete-team').addEventListener('click', () => {
    removeTeamFromLocalStorage(teamId)
    newTeamCard.remove()
    })
}