// RegEx (Regular Expression) for JavaScript

document.querySelector('#form').addEventListener('submit', (event) => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const errorMessage = document.querySelector('#errorMsg');

    if (username.length < 5) {
        errorMessage.innerHTML = 'Username must be at least 5 characters long';
        event.preventDefault();
    }

    if (password.length < 8) {
        errorMessage.innerHTML = 'Password must be at least 8 characters long';
        event.preventDefault();
    }

})