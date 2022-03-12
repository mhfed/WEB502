"use strict";
const products = [
    { id: 1,
        name: 'Product A'
    },
    { id: 2,
        name: 'Product B'
    },
];
function getProduct(products) {
    const data = products.map(product => product.name);
    return data.join('');
}
const data = getProduct(products);
console.log(data);
