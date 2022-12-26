let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let email = document.getElementById("email")
let contraseña = document.getElementById("contraseña")
let input = document.getElementById("ccuenta")

nombre.addEventListener("change", (event) => { console.log("Nombre del cliente ", event.target.value); });
apellido.addEventListener("change", (event) => { console.log("Apellido del cliente ", event.target.value); });
email.addEventListener("change", (event) => { console.log("E-mail del cliente ", event.target.value); });


class cliente {
    constructor (id = 0, nombre = "sin nombre", apellido = "sin apellido"){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
    }
    toString(){
        return this.name
    }
}

let cliente1 = new cliente (1, "Leonor", "Martinez")
let cliente2 = new cliente (1, "Emmanuel", "Martinez")

let producto = localStorage.getItem('cliente1')
console.log("El cliente numero 1 es  ", cliente1);