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

    fetch(base_url + '/login',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    }).then(resp => {
        console.log(resp);
    }).catch(error => {
        console.log(error);
        alertar('No se pudo iniciar sesión', 'danger');
    });
});

