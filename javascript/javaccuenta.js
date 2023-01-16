let clientee = JSON.parse(localStorage.getItem("cliente")) || []

let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let email = document.getElementById("email")
let contraseña = document.getElementById("contraseña")
let input = document.getElementById("ccuenta")

nombre.addEventListener("change", (event) => { console.log("Nombre del cliente ", event.target.value); });
apellido.addEventListener("change", (event) => { console.log("Apellido del cliente ", event.target.value); });
email.addEventListener("change", (event));

saveLoca()
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


const saveLoca = () =>{
    localStorage.setItem("cliente", JSON.stringify(cliente)) 
 }
 
 JSON.parse(localStorage.getItem("cliente"))

// localStorage.setItem("cliente", this.nombre.valueS)

// let clientee = localStorage.getItem(cliente)