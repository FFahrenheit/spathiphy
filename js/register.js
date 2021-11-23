const registerForm = document.getElementById('register');

const form = {
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    email: document.getElementById('email'),
    nombre: document.getElementById('nombre')
};

registerForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        username: form.username.value,
        password: form.password.value
    }
    console.log(data);
});

