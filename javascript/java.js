let nombre = prompt("Ingresa tu nombre")
let apellido = prompt(" Ingresa tu apellido")
{ alert("Bienvenido  " + nombre) };
console.log("El nombre del cliente es ", nombre, apellido)

let compra = prompt("¿Te gustaria realizar una compra? SI / NO")
if (compra.toLowerCase() == "no") {
    alert("Por cualquier consulta estamos a tu disposicion.")
} else if (compra.toLowerCase() == "si") {
    let articulo = parseInt(prompt("Genial ¿que numero de articulo te interesa de esta pagina? / 9"))
    while (articulo != "9"
    ) {
        articulo = parseInt(prompt("Genial ¿que numero de articulo te interesa de esta pagina? / si quiere salir seleccione 9 "))

        switch (articulo) {
            case 1:
                alert("a seleccionado el articulo de $142.000")
                break;
            case 2:
                alert("a seleccionado el articulo de $182.000")
                break;
            case 3:
                alert("a seleccionado el articulo de $314.000")
                break;
            case 4:
                alert("a seleccionado el articulo de $550.000")
                break;
            case 5:
                alert("a seleccionado el articulo de $180.000")
                break;
            default:
                alert("no ha seleccionado ningun articulo")
                break;
        }
    }
} else {
    alert("Ingresaste un valor incorrecto.")
}

class Articulo {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = parseFloat(precio);
    }
    toString() {
        return this.marca + ", " + this.modelo + ", " + this.precio;
    }
    sumarIva(){
        this.precio = this.precio * 1.21;
        return this.precio;
    }

    getDescuento (porcentaje){
        return this.precio - this.precio * (porcentaje/100);
    }
}


let unArticulo = new Articulo("Parquer", "Saxo alto Custom", 142000)

console.log("el articulo es  ", unArticulo)
console.log("el articulo es  ", unArticulo.toString())
console.log ("el precio del producto con el descuento de 10% es  ", unArticulo.getDescuento(10))

let listaMarca = ["PARQUER", "KNIGHT", "PARQUER", "YAMAHA", "YAMAHA"]
let listaArt = [0, 142000, 182000, 314000, 550000, 180000]

let art = prompt ("¿que numero de articulo te interesa?")
let artt = prompt ("¿que otro articulo te interesa?")
console.log ("el numero de articulo seleccionado es  " , art , " y " , artt)

console.log ("suma de articulo seleccionados", listaArt[art] + listaArt[artt])
let marcaBuscada = prompt("¿que marca buscas?")
console.log ("la marca buscada es " , marcaBuscada)
let index = listaMarca.indexOf(marcaBuscada.toUpperCase())
if (index !== -1) {
    console.log("encontraste la marca buscada")
} else {
    console.log (" esa marca no la tenemos disponible")
}