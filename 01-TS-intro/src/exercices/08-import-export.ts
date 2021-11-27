/*
    ===== Código de TypeScript =====
*/
import { calculateTaxes, Product } from "./07-des-func";

const shopCar: Product[] = [
    {
        desc: 'Telefono 1',
        price: 100
    },
    {
        desc: 'Telefono 2',
        price: 150
    }
];

// Homework 

const [total, isv] = calculateTaxes(shopCar);

console.log('Total', total);
console.log('ISV', isv);

