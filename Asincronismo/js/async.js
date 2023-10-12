//TRES CÁLCULOS CON DIFERENTE TIEMPO PARA MOSTRAR EL RESULTADO

procesoA = async() => {
    let suma = 0;
    return new Promise( (resolve) => setTimeout( () => {
        for (let i = 0; i <= 5000; i++) {
            suma += i;
        }
        resolve(`la suma es ${suma}`);
    }, 3000)
    ) 
}

procesoB = async() => {
    let suma = 0;
    return new Promise( (resolve) => setTimeout( () => {
        for (let i = 0; i <= 10000; i++) {
            suma += i;
        }
        resolve(`la suma es ${suma}`);
    }, 10000)
    ) 
}

procesoC = async() => {
    let suma = 0;
    return new Promise( (resolve) => setTimeout( () => {
        for (let i = 0; i <= 1000; i++) {
            suma += i;
        }
        resolve(`la suma es ${suma}`);
    }, 7000)
    ) 
}

document.querySelector('#HOLIWIS').addEventListener('click', () => {
    procesoA().then(sigifredo => console.log(sigifredo));
    procesoB().then(sigifredo => console.log(sigifredo));
    procesoC().then(sigifredo => console.log(sigifredo));
})


//-----CONVERTIR EL CÓDIGO ANTERIOR A FUNCIONES SINCRÓNICAS. SIN PROMESAS Y SIN EL async-----


proceso1 = () => {
    let sumita = 0;
    for (let i = 0; i <= 5000; i++) {
        sumita += i;
    }
    return sumita;
}
proceso2 = () => {
    let sumita = 0;
    for (let i = 0; i <= 10000; i++) {
        sumita += i;
    }
    return sumita;
}
proceso3 = () => {
    let sumita = 0;
    for (let i = 0; i <= 1000; i++) {
        sumita += i;
    }
    return sumita;
}

document.querySelector('#marsupial').addEventListener('click', () => {
    console.log(proceso1());
    console.log(proceso2());
    console.log(proceso3());
});

