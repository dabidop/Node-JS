
const lista1 = [1000, 1001, 2000, 2001];
const lista2 = [3000, 3001, 4000, 4001];
const lista3 = [5000, 5001, 6000, 6001];
const lista4 = [7000, 7001, 8000, 8001];

let documento = document.querySelector('#Documento');

/*
Dadas 4 listas de documentos, implementar una función async por cada lista para buscar un documento.
Si el documento está devolver "Encontrado".
Imprimir el mensaje
*/

procesoLista1 = async () => {
    return new Promise ((resolve, reject) => {
        for (let i = 0; i < lista1.length; i++) {
            if (documento.value == lista1[i]) {
                resolve(alert('Encontrado en la lista 1'))
            } else {
                reject('Dato no encontrado en la lista 1')
            }
        }
    })
}

procesoLista2 = async () => {
    return new Promise ((resolve, reject) => {
        for (let i = 0; i < lista2.length; i++) {
            if (documento.value == lista2[i]) {
                resolve(alert('Encontrado en la lista 2'))
            } else {
                reject('Dato no encontrado en la lista 2')
            }
        }
    })
}

procesoLista3 = async () => {
    return new Promise ((resolve, reject) => {
        for (let i = 0; i < lista3.length; i++) {
            if (documento.value == lista3[i]) {
                resolve(alert('Encontrado en la lista 3'))
            } else {
                reject('Dato no encontrado en la lista 3')
            }
        }
    })
}

procesoLista4 = async () => {
    return new Promise ((resolve, reject) => {
        for (let i = 0; i < lista4.length; i++) {
            if (documento.value == lista4[i]) {
                resolve(alert('Encontrado en la lista 4'))
            } else {
                reject('Dato no encontrado en la lista 4')
            }
        }
    })
}

document.querySelector('#btnBuscar').addEventListener('click', () => {
    procesoLista1().then(mensaje => console.log(mensaje).catch(error => console.log(error)))
    procesoLista2().then(mensaje => console.log(mensaje).catch(error => console.log(error)))
    procesoLista3().then(mensaje => console.log(mensaje).catch(error => console.log(error)))
    procesoLista4().then(mensaje => console.log(mensaje).catch(error => console.log(error)))
})