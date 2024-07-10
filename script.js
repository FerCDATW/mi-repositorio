const formulario = document.getElementById("formulario");
        const email = document.getElementById("mail");
        const mensaje = document.getElementById("mensaje");

        formulario.addEventListener('submit', function(e) {
            e.preventDefault();

        if(email.value === '') {
            mensaje.textContent = 'Por favor introduce un a dirección de correo electrónico válida';
            mensaje.className = "error";
        } else {
            mensaje.textContent = 'El formulario se ha enviado correctamente';
            mensaje.className = "exito";
            email.value = "";

            setTimeout(function(){
                mensaje.textContent = '';
                mensaje.className = 'mensaje';

            }, 3000);
    
        }

        });