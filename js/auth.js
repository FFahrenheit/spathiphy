(() => {
    const logged = localStorage.getItem('logged') || 'false';
    
    console.log({logged});

    if (logged == 'false') {
        console.log('Return to login');
        window.location.assing('login.html');
    }
})();