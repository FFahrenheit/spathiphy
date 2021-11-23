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
        password: form.password.value,
        email: form.email.value,
        nombre: form.nombre.value
    };

    console.log(data);

    fetch(base_url + '/auth',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',            
        },
        body: data
    }).then(resp => {
        console.log(resp);
    }).catch(error => {
        console.log(error);
        alertar('No se pudo registrar al usuario', 'danger');
    });
});

