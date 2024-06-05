
export function modalClearLoginForm() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginErrorSpan = document.getElementById('form-error');

    usernameInput.value = '';
    passwordInput.value = '';
    loginErrorSpan.textContent = '';
};


 export function runLoginForm() {
    const loginFormElement = document.getElementById('login-form');

    loginFormElement.addEventListener('submit', function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        

        const usernameInputValue = usernameInput.value;
        const passwordInputValue = passwordInput.value;

        if(!userValidation(usernameInputValue, passwordInputValue)){
            usernameInput.value = '';
            passwordInput.value = '';
            return;
        }

        clearLoginForm(usernameInput, passwordInput);
        redirectUser();


     });  
 }
 function userValidation(usernameInputValue, passwordInputValue){
    const loginErrorSpan = document.getElementById('form-error');

    const usersKey = 'logins'
    const usersList = [
        {
        "username": "admin",
        "password": "12345"
        }
    ]

    localStorage.setItem(usersKey, JSON.stringify(usersList));

    const validUser = usersList.some(user => user.username === usernameInputValue && user.password === passwordInputValue);

    if(!validUser){
        loginErrorSpan.textContent = 'invalid username or password.';
        return false;
    }
    return true;
 }

 function redirectUser() {
    window.location.href = "/pages/teams.html"/*here is the link on page3*/
    
 }
 function clearLoginForm(usernameInput, passwordInput){

    usernameInput.value = '';
    passwordInput.Value = '';
 }


