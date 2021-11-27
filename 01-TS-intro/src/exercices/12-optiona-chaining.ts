/*
    ===== Código de TypeScript =====
*/
interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Jorge'
}

const pasajero2: Pasajero = {
    nombre: 'Olga',
    hijos: ['Veronica', 'Alejandra', 'Jorge']
}

function imprimirHijos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimirHijos(pasajero2)