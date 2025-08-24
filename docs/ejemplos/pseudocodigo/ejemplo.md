# Pseudocódigo de CREAR TAREA

```
INICIO

tareas <- Lista vacía

MIENTRAS el usuario quiera agregar una nueva tarea HACER
    ESCRIBIR 'Ingresa tu tarea:'
    LEER tarea

    SI tarea != "" ENTONCES 
        ESCRIBIR '¿Es una tarea urgente?'
        LEER urgencia

        SI urgencia == "sí" ENTONCES
            tarea = tarea + " *URGENTE*"
        FIN SI
        
        AGREGAR tarea a tareas
    SINO
        ESCRIBIR "La tarea no puede estar vacía"
    FIN SI
    
ESCRIBIR "Lista de tareas final:"

PARA cada tarea en tareas HACER
    ESCRIBIR tarea
FIN PARA

FIN
```