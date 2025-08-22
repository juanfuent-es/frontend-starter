function agregarTarea() {
    // Obtener valores
    var nombre = document.getElementById('nombreTarea').value.trim();
    var categoria = document.getElementById('categoriaTarea').value;
    var fecha = document.getElementById('fechaTarea').value;
    var prioridad = document.getElementById('prioridadTarea').value;

    // Validar nombre
    if (!nombre) return;

    // Definir badges y colores
    var prioridadBadge = '';
    if (prioridad === 'alta') prioridadBadge = '<span class="badge bg-warning text-dark"><i class="bi bi-exclamation-triangle me-1"></i>Alta</span>';
    else if (prioridad === 'media') prioridadBadge = '<span class="badge bg-info text-dark"><i class="bi bi-exclamation-circle me-1"></i>Media</span>';
    else if (prioridad === 'baja') prioridadBadge = '<span class="badge bg-secondary"><i class="bi bi-exclamation-circle me-1"></i>Baja</span>';

    var categoriaBadge = '';
    if (categoria === 'hogar') categoriaBadge = '<span class="badge bg-primary"><i class="bi bi-house-door me-1"></i>Hogar</span>';
    else if (categoria === 'trabajo') categoriaBadge = '<span class="badge bg-success"><i class="bi bi-briefcase me-1"></i>Trabajo</span>';
    else if (categoria === 'personal') categoriaBadge = '<span class="badge bg-danger"><i class="bi bi-person me-1"></i>Personal</span>';
    else if (categoria === 'estudio') categoriaBadge = '<span class="badge bg-secondary"><i class="bi bi-book me-1"></i>Estudio</span>';
    else if (categoria === 'otro') categoriaBadge = '<span class="badge bg-dark"><i class="bi bi-gift me-1"></i>Otro</span>';

    var fechaBadge = fecha ? `<span class="badge bg-light text-dark border"><i class="bi bi-calendar-event me-1"></i>${fecha}</span>` : '';

    // Crear el HTML de la nueva tarea
    var nuevaTarea = document.createElement('li');
    nuevaTarea.className = 'list-group-item p-3';
    nuevaTarea.innerHTML = `
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h6 class="mb-1 fw-bold"><i class="bi bi-chevron-right text-primary me-2"></i>${nombre}</h6>
                  <div class="d-flex flex-wrap gap-2 small">
                    ${prioridadBadge}
                    ${categoriaBadge}
                    ${fechaBadge}
                  </div>
                </div>
                <button class="btn btn-outline-success btn-sm rounded-circle ms-2" title="Marcar como completada" data-bs-toggle="modal" data-bs-target="#modalConfirmarCompletada">
                  <i class="bi bi-check-lg"></i>
                </button>
              </div>
            `;

    // Agregar la nueva tarea al inicio de la lista
    var lista = document.querySelector('#card-tareas-pendientes ul.list-group');
    if (lista) {
        lista.insertBefore(nuevaTarea, lista.firstChild);
    }

    // Limpiar formulario
    form.reset();
    // Cerrar modal
    var modal = bootstrap.Modal.getInstance(document.getElementById('modalNuevaTarea'));
    if (modal) modal.hide();
}

function toggleDarkLightMode() {
    document.body.classList.toggle('modo-oscuro');
    var icon = document.getElementById('iconDarkMode');
    if (document.body.classList.contains('modo-oscuro')) {
        icon.classList.remove('bi-moon-stars-fill');
        icon.classList.add('bi-brightness-high-fill');
        toggleBtn.classList.remove('btn-outline-light');
        toggleBtn.classList.add('btn-outline-warning');
        toggleBtn.querySelector('span').textContent = 'Modo claro';
    } else {
        icon.classList.remove('bi-brightness-high-fill');
        icon.classList.add('bi-moon-stars-fill');
        toggleBtn.classList.remove('btn-outline-warning');
        toggleBtn.classList.add('btn-outline-light');
        toggleBtn.querySelector('span').textContent = 'Modo oscuro';
    }
}