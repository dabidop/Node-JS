buscarCliente = (dato) => {
    const documentos = [1010, 1011, 1020, 1030, 1957, 5550];
    const nombres = ['Carmen', 'Ines', 'Juan', 'Daniela', 'María', 'Janeth']
    //Agregar el código que devuelva en la promesa el nombre solo si el documento existe

    let encontrado = false;

    for (let i = 0; i < documentos.length; i++) {
        if (dato == documentos[i]) {
            encontrado = true;
            var nombre = nombres[i];
        }
    }

    return new Promise((resolve, reject) => {
        if (encontrado) {
            resolve(alert(nombre));
        } else {
            reject(alert("Dato no encontrado"));
        }
    })
}

document.querySelector('#btnBuscar')
.addEventListener('click', () => buscarCliente(document.getElementById('dato').value)
.then(mensaje => console.log(mensaje)).catch(error => console.log(error)));