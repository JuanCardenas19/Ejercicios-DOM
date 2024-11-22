document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    clearErrors();

    
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    let esValido = true;

    
    if (nombre.trim() === '') {
        mostrarError('nombreError', 'El nombre es obligatorio.');
        esValido = false;
    }

    
    if (correo.trim() === '') {
        mostrarError('correoError', 'El correo electrónico es obligatorio.');
        esValido = false;
    } else if (!validarCorreo(correo)) {
        mostrarError('correoError', 'El correo electrónico no es válido.');
        esValido = false;
    }

    
    if (contrasena.trim() === '') {
        mostrarError('contrasenaError', 'La contraseña es obligatoria.');
        esValido = false;
    } else if (contrasena.length < 6) {
        mostrarError('contrasenaError', 'La contraseña debe tener al menos 6 caracteres.');
        esValido = false;
    }

    
    if (esValido) {
        
        console.log({
            nombre: nombre,
            correo: correo,
            contrasena: contrasena
        });

        
        document.getElementById('mensajeExito').textContent = '¡Registro exitoso!';

        
        document.getElementById('registroForm').reset();
    }
});


function mostrarError(idElemento, mensaje) {
    const errorDiv = document.getElementById(idElemento);
    errorDiv.textContent = mensaje;
}


function clearErrors() {
    const errorDivs = document.querySelectorAll('.error');
    errorDivs.forEach(div => div.textContent = '');
    document.getElementById('mensajeExito').textContent = '';
}


function validarCorreo(correo) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(correo);
}
