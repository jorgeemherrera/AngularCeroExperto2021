/*
    ===== Código de TypeScript =====
*/
export interface Product {
    desc: string;
    price: number;
}

const telefono: Product = {
    desc: 'Nokia A1',
    price: 150
}

const tableta: Product = {
    desc: 'ipad air',
    price: 350
}


export function calculateTaxes(products: Product[]): [number, number] {
    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    })
    return [total, total * 0.15];
}

const articles = [telefono, tableta];

const [total, isv] = calculateTaxes(articles);

console.log('ISV: ', isv);
console.log('total: ', total);

