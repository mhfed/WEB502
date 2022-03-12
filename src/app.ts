
type Product = {
    id:number, 
    name:string
}
const products: Product[] = [
    {   id:1,
        name: 'Product A'
    },
    {   id:2,
        name: 'Product B'
    },
]
function getProduct<T extends Product> (products: T[]):void {
    const data = products.map(product=> product.name);
    return data.join('');
}
const data = getProduct(products)
console.log(data);
