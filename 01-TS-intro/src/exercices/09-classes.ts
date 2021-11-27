/*
    ===== Código de TypeScript =====
*/

// Classes

class Person {
    constructor(
        public nameReal: string,
        public address: string
    ) { }
}

class Heroe extends Person {
    // alterEgo: string;  // private: visible en esta clase 
    // age: number;       // public: afuera de esta clase
    // realName: number;  // static: se puede acceder sin crear una instancia

    // constructor: funcion para cuando creo una instancia y la puedo inicializar
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, 'new york');
    }


}

const ironman = new Heroe('IronMan', 45, 'Tony Stark');

console.log(ironman);