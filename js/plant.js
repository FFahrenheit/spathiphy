let id;

const form = document.getElementById('form');

const planta = {
    nombre: document.getElementById('nombre'),
    utila: document.getElementById('ultima'),
    temperatura: document.getElementById('temperatura'),
    luminosidad: document.getElementById('luminosidad'),
    humedad: document.getElementById('humedad'),
    max_temp: document.getElementById('max_temp'),
    min_temp: document.getElementById('min_temp'),
    max_hum: document.getElementById('max_hum'),
    min_hum: document.getElementById('min_hum')
};


(() => {
    const queryString = window.location.search;
    console.log({ queryString });

    if(queryString == ''){
        window.location.assign('dashboard.html');
    }else{
        const urlParams = new URLSearchParams(queryString);
        id = urlParams.get('id');
        loadInfo();
    }
})();

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    console.log('Saving...');
})


function loadInfo(){
    console.log({id});
    // fetch('').
}