/*
    ===== Código de TypeScript =====
*/

function multiplicar(numero: number, otroNumero?: number, base:number = 2):number {
    return numero * base
}

interface PersonajeLOR {
    nombre: string,
    puntosVida: number,
    mostrarPv: () => void
}
function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.puntosVida += curarX;

    console.log(personaje)
}

const nuevoPersonajeLOR: PersonajeLOR = {
    nombre: 'Strider',
    puntosVida: 50,
    mostrarPv() {
        console.log('Puntos de vida', this.puntosVida)
    }
}

curar(nuevoPersonajeLOR, 20);

 nuevoPersonajeLOR.mostrarPv();