const loginForm = document.getElementById('login');

const form = {
    username: document.getElementById('username'),
    password: document.getElementById('password')
};

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        username: form.username.value,
        password: form.password.value
    }
    console.log(data);
});

