const form = document.getElementById('form');

const planta = {
    especie: document.getElementById('especie'),
    id_micro: document.getElementById('id_micro'),
    max_temp: document.getElementById('max_temp'),
    min_temp: document.getElementById('min_temp'),
    max_hum: document.getElementById('max_hum'),
    min_hum: document.getElementById('min_hum')
};

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    console.log('Saving...');
})
