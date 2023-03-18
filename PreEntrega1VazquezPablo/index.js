// Simulador de Prestamo

// creo objetos

class Banco {
    constructor(nombre, id, tasa12, tasa24, tasa36) {
        this.nombre = nombre
        this.id = id
        this.tasa12 = tasa12
        this.tasa24 = tasa24
        this.tasa36 = tasa36
    }
}

// creo y agrego los bancos al array
const bancos = [
    new Banco('nacion', 1, 45, 75, 110),
    new Banco('credicoop', 2, 48, 75, 120),
    new Banco('santader', 3, 50, 75, 140),
    new Banco('galicia', 4, 50, 75, 115),
]

let bancoSeleccionado = parseInt(prompt('Elige el numero de tu banco: 1. Banco Nacion - 2.Banco Credicoop - 3. Santader Rio - 4.Galicia'))
let escogioBanco = false


let banco


//Cambio el While con metodos de busqueda sobre el Array

while (escogioBanco === false){
 banco = bancos.find ((banco) => banco.id === bancoSeleccionado)
if (!banco) {
    bancoSeleccionado = parseInt(prompt('Elige el numero correto! : 1. Banco Nacion - 2.Banco Credicoop - 3. Santader Rio - 4.Galicia'))
} else {
    escogioBanco = true
}
}

alert('El banco elegido es: '+ banco.nombre)


const montoSolicitado = parseInt ( prompt(
    'Ingresa el monto socilicitado')
    )
const cuota12 =calcularCuota (montoSolicitado, banco.tasa12, 12)
const cuota24 =calcularCuota (montoSolicitado, banco.tasa24, 24)
const cuota36 =calcularCuota (montoSolicitado, banco.tasa36, 36)
console.log (cuota12, cuota24, cuota36)

function calcularCuota (monto,interes,meses){
    const cuota = (monto + (monto * interes))/100/meses
    return cuota
}



alert (`El Banco ${banco.nombre} te ofrece las siguientes opciones: 1. Cuotas de $${cuota12} mensuales a 12 meses - 2. Cuotas de $${cuota24} mensuales a 24 meses o 3. Cuotas de $${cuota36} mensuales a 36 meses`)


