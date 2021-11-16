/*
    ===== Código de TypeScript =====
*/

// Classes

class Heroe {
    // alterEgo: string;  // private: visible en esta clase 
    // age: number;       // public: afuera de esta clase
    // realName: number;  // static: se puede acceder sin crear una instancia

    // constructor: funcion para cuando creo una instancia
    constructor(public alterEgo: string) {
        this.alterEgo = alterEgo;
    }
}

const ironman = new Heroe('IronMan');

console.log(ironman);