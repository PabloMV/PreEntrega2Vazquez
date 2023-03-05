// Simulador de Prestamo

class Banco {
    constructor(nombre, id, tasa12, tasa24, tasa36) {
        this.nombre = nombre
        this.id = id
        this.tasa12 = tasa12
        this.tasa24 = tasa24
        this.tasa36 = tasa36
    }
}

const banconacion = new Banco('nacion', 1, 45, 75, 110)
const bancocredicoop = new Banco('credicoop', 2, 48, 75, 120)
const bancosantarder = new Banco('santader', 3, 50, 75, 140)
const bancogalicia = new Banco('galicia', 4, 50, 75, 115)

let bancoSeleccionado = parseInt(prompt('Elige el numero de tu banco: 1. Banco Nacion - 2.Banco Credicoop - 3. Santader Rio - 4.Galicia'))

let infoBancoSeleccionado
let escogioBanco = false
while (escogioBanco === false) {
    if (bancoSeleccionado === 1) {
        escogioBanco = true
        infoBancoSeleccionado = banconacion
    } else if (bancoSeleccionado === 2) {
        escogioBanco = true
        infoBancoSeleccionado = bancocredicoop
    } else if (bancoSeleccionado === 3) {
        escogioBanco = true
        infoBancoSeleccionado = bancosantarder
    } else if (bancoSeleccionado === 4) {
        escogioBanco = true
        infoBancoSeleccionado = bancogalicia
    } else { bancoSeleccionado = parseInt(prompt('Elige el numero correto! : 1. Banco Nacion - 2.Banco Credicoop - 3. Santader Rio - 4.Galicia')) }

}
alert('El banco elegido es: '+ infoBancoSeleccionado.nombre)
console.log ('infobanco', infoBancoSeleccionado)

const montoSolicitado = parseInt ( prompt('Ingresa el monto socilicitado'))
const cuota12 =calcularCuota (montoSolicitado,infoBancoSeleccionado.tasa12,12)
const cuota24 =calcularCuota (montoSolicitado,infoBancoSeleccionado.tasa24,24)
const cuota36 =calcularCuota (montoSolicitado,infoBancoSeleccionado.tasa36,36)
console.log (cuota12, cuota24, cuota36)

function calcularCuota (monto,interes,meses){
    const cuota = (monto + (monto*interes))/100/meses
    return cuota
}

console.log ('infoBanco', infoBancoSeleccionado, montoSolicitado)

alert (`El Banco ${infoBancoSeleccionado.nombre} te ofrece las siguientes opciones: 1. Cuotas de $${cuota12} mensuales a 12 meses - 2. Cuotas de $${cuota24} mensuales a 24 meses o 3. Cuotas de $${cuota36} mensuales a 36 meses`)