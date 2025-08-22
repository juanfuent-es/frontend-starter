let toggleBtn = document.getElementById('toggleDarkMode');

toggleBtn.addEventListener('click', function() {
    toggleDarkLightMode();
});

let form = document.querySelector('#crear-tarea-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    agregarTarea();
});