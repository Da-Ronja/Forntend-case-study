import { useState } from "react";
import { BasketItem } from "../types/basket"; 

const mockProducts: any[] = [
    {
        "product": {
            "id":1,
            "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price":109.95,
            "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        "quantity": 2
    },
    {
        "product": {
            "id":2,
            "title":"Mens Casual Premium Slim Fit T-Shirts ",
            "price":22.3,
            "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        },
        "quantity": 1
    },
]

const Basket = () => {
    const [basket, setBasket] = useState<any[]>(mockProducts);
    
    return (
        <div>
            <h1>Basket</h1>
            {basket.length === 0 ? (
          <h2>Korgen är tom.</h2>
        ) : (
            <>
            {basket.map((product: BasketItem, quantity: number) => (
                <div key={product.product.id}>
                    <img src={product.product.image} alt={product.product.title} style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                    <h3>{product.product.title}</h3>
                    <p>{product.product.price} kr</p>
                    <input 
                        type="number" 
                        name="" 
                        id="" 
                        value={quantity}
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <button onClick={() => console.log("onClick Basket")}>Remove</button>
                </div>
            ))}
            </>
        )}
        </div>
    )
}

export default Basket;