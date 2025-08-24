# Algoritmos

**Marcar tarea completa**
1. El usuario entra a la vista completa de tareas
2. El usuario localice la tarea a marcar entre las pendientes
3. El usuario da click en botón 'completar'
4. El sistema debe actualizar la tarea y marcar completada
5. La tarea se eliminé de tareas pendientes y se mueva a completadas
6. Fin del proceso

**Poder crear una nueva tarea**
1. El usuario entra a nuestra aplicación
2. El usuario da click en botón para 'Crear Nueva Tarea'
3. El sistema muestra un formulario con un campo de título que el usuario debe llenar
4. El usuario da click en 'Guardar Tarea'
5. (Validación) El sistema revisa la existencia del campo de título
    - Si está vacío, entonces el sistema no la guarda, y manda mensaje de error
    - Si el campo está presente, entonces se guarda y continúa el proceso
6. Se crea la nueva tarea con un estado 'pendiente'
7. Redireccionamos al usuario a la lista de tareas pendientes
8. Fin del proceso.