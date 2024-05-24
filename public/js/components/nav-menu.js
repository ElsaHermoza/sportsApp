
export function toggleMenu() {

    const toggleMenuButton = document.getElementById('toggle-menu-button');
    const menu = document.getElementById('nav');

    toggleMenuButton.addEventListener('click', function() {

        if (!menu.classList.contains('menu--open')) {
            menu.classList.add('menu--open');
        } else {
            menu.classList.remove('menu--open')
        }

    });
};
