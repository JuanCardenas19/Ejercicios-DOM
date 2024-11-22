
const inputTarea = document.getElementById('nuevaTarea');
const botonAgregar = document.getElementById('agregarTarea');
const listaTareas = document.getElementById('listaTareas');


function agregarTarea() {
    const tareaTexto = inputTarea.value.trim();

    if (tareaTexto === '') {
        alert('Por favor, ingresa una tarea.');
        return; 
    }

    
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = tareaTexto;

    
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        listaTareas.removeChild(nuevaTarea);
    });

    
    const botonCompletar = document.createElement('button');
    botonCompletar.textContent = 'Completar';
    botonCompletar.addEventListener('click', () => {
        nuevaTarea.classList.toggle('completed');
    });


    nuevaTarea.appendChild(botonCompletar);
    nuevaTarea.appendChild(botonEliminar);

    
    listaTareas.appendChild(nuevaTarea);

    
    inputTarea.value = '';
}


    botonAgregar.addEventListener('click', agregarTarea);


    inputTarea.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            agregarTarea();
        }
    });
