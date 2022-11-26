let nombre = prompt("Ingresa tu nombre")
{ alert("Bienvenido  " + nombre) };

let compra = prompt("¿Te gustaria realizar una compra? SI / NO")
if (compra.toLowerCase() == "no") { alert("Por cualquier consulta estamos a tu disposicion.") };

if (compra.toLowerCase() == "si") {
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
}
else {
    prompt("Ingresaste un valor incorrecto.")
}