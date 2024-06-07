const nombre = document.querySelector('.nombre');
const email = document.querySelector('.email');
const form = document.querySelector('#form');


form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
event.preventDefault()
    const nombreValue = nombre.value.trim(); // Obtener el valor del nombre y eliminar espacios en blanco al principio y al final
    if(nombreValue.length < 3){ // Verificar si el nombre tiene menos de 3 caracteres
        alert('El nombre debe tener al menos 3 caracteres');
        return; // Detener el envío del formulario si la validación falla
    }
    

    if (!nombre.value.trim() || !email.value.trim()) {
        alert('Por favor, complete todos los campos del formulario.');
        return; // Detener el envío del formulario si la validación falla
    } else{
        alert('Gracias por contactarnos')
        this.reset();

    }

}