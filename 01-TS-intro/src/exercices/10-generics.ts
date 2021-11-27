/*
    ===== Código de TypeScript =====
*/
function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('hola mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3]);
let soyExplicito = queTipoSoy<Object>({name: 'Jorge', lastName: 'Herrera'});