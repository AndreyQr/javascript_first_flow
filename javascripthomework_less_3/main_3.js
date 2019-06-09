'use strict';
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
const costWithPercent = products.map(cost => cost.price - cost.price * 0.5);
console.log(costWithPercent);
console.log(products);