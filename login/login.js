const users = ["user1", "user2", "user3", "user4", "user5"];
const passwords = ["pass1", "pass2", "pass3", "pass4", "pass5"];
validarLogin = (uno, dos) => {
    let loged = false;
    for (let i = 0; i <= users.length; i++) {
        if (uno == users[i]) {
            for (let t = 0; t <= passwords.length; t++) {
            if (dos == passwords[i]) {
                loged = true;
                break;
            }
            }
        }
    }
    return new Promise( (resolve, reject) => {
        if (loged) {
            resolve(
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Usuario Loggeado',
                    showConfirmButton: false,
                    timer: 1500
                })
            )
        } else if (uno.length == 0 || dos.length == 0) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Porfavor rellene todos los campos',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            reject(
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Usuario o contraseña incorrectos',
                    showConfirmButton: false,
                    timer: 1500
                })
            )
        }
    })
}
document.querySelector('#button').addEventListener('click', () => {
    validarLogin(document.getElementById('user').value, document.getElementById('password').value)
})