import { Product } from "./types/product";
import { useState, useEffect } from "react";


//const ProductList = ({products, onAddToCart}: ProductListProps) => {
const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])
    
    return (
        <div>
            <h1>Product List</h1>
            {products.map((product: Product) => (
                <div key={product.id}>
                    <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px", objectFit: "contain" }} />
                    <div>
                        <div>
                            <p>Stars: {product.rating.rate} ({product.rating.count})</p>
                            
                        </div>
                        <h3>{product.title}</h3>
                        <p>{product.description.length > 100 ? product.description.substring(0, 100) + "..." : product.description}</p>
                        <p>{product.price}kr</p>
                    </div>
                    <button onClick={() => console.log("onClick ProductList")}>Add</button>
                    {/* <button onClick={() => onAddToCart(product)}>Add to Cart</button> */}
                </div>
            ))}
        </div>
    )
}

export default ProductList;