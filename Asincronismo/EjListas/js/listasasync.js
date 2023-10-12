const nombres1 = ["Yadira", "Felicia", "Laura", "Daniela", "Manuela", "Valentina", "Camila", "Noemi", "Juliana", "Mariana", "María", "Lizeth"];
const nombres2 = ["Daniela", "Maria Antonia", "Sofía", "Celina", "Lucía", "Rocío", "Estela", "Doris", "Helena"];
const nombres3 = ["Juliana", "Alison", "Valentina", "Olga", "Consuelo", "Fernanda", "Yoimiya", "Hu Tao", "Daniela", "Marina"];
const nombres4 = ["Lizeth", "Perla", "Maritza", "Marizza", "Sofía", "Daniela", "Ana María", "Camila", "Alison"];

encontrado1 = async(nombre) => {
    let encontrar = false;
    let posi = 0;
    for (let i = 0; i <= nombres1.length; i++) {
        if (nombre == nombres1[i]) {
            encontrar = true;
            posi = i;
            break;
        }
    }
    return new Promise( (resolve, reject) => {   
        if (encontrar) {
            resolve(alert(`El nombre, en la lista 1, se encuentra en la posición ${posi}`));
        } else {
            reject(alert('El nombre no se encuentra en la lista 1'));
        }
    })
}
encontrado2 = async(nombre) => {
    let encontrar = false;
    let posi = 0;
    for (let i = 0; i <= nombres2.length; i++) {
        if (nombre == nombres2[i]) {
            encontrar = true;
            posi = i;
            break;
        }
    }
    return new Promise( (resolve, reject) => {   
        if (encontrar) {
            resolve(alert(`El nombre, en la lista 2, se encuentra en la posición ${posi}`));
        } else {
            reject(alert('El nombre no se encuentra en la lista 2'));
        }
    })
}
encontrado3 = async(nombre) => {
    let encontrar = false;
    let posi = 0;
    for (let i = 0; i <= nombres3.length; i++) {
        if (nombre == nombres3[i]) {
            encontrar = true;
            posi = i;
            break;
        }
    }
    return new Promise( (resolve, reject) => {   
        if (encontrar) {
            resolve(alert(`El nombre, en la lista 3, se encuentra en la posición ${posi}`));
        } else {
            reject(alert('El nombre no se encuentra en la lista 3'));
        }
    })
}
encontrado4 = async(nombre) => {
    let encontrar = false;
    let posi = 0;
    for (let i = 0; i <= nombres4.length; i++) {
        if (nombre == nombres4[i]) {
            encontrar = true;
            posi = i;
            break;
        }
    }
    return new Promise( (resolve, reject) => {   
        if (encontrar) {
            resolve(alert(`El nombre, en la lista 4, se encuentra en la posición ${posi}`));
        } else {
            reject(alert('El nombre no se encuentra en la lista 4'));
        }
    })
}

document.querySelector('#boton').addEventListener('click', () => {
    encontrado1(document.getElementById('nomb').value)
    encontrado2(document.getElementById('nomb').value)
    encontrado3(document.getElementById('nomb').value)
    encontrado4(document.getElementById('nomb').value)
});