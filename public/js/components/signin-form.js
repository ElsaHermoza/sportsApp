const admin=[
    {
        "username": "Elena",
        "password": "12345" 
    },
    {
        "username": "Pablo",
        "password": "12345"
    }
];

export function modalClearLoginForm() {
    const usernameImput = document.getElementById('username');
    const passwordImput= document.getElementById('password');
    const loginErrorSpan= document.getElementById('form-error');

    usernameImput.value= '';
    passwordImput.value='';
    loginErrorSpan.textContent='';
};
 export function runLoginForm() {
    const loginFormElement= document.getElementById('login-form');

    loginFormElement.addEventListener('submit', function (event) {
        event.preventDefault();

        const usernameImput= document.getElementById('username');
        const passwordImput= document.getElementById('password');
        

        const usernameImputValue= usernameImput.value;
        const passwordImputValue= passwordImput.value;

        if(!userValidation(usernameImputValue, passwordImputValue)){
            usernameImputValue='';
            passwordImputValue='';
            return;
        }

        clearLoginForm


        
    })
    
 }


