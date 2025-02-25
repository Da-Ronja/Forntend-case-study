import { BasketItem } from "../types/basket"; 

const Basket = ({ basketItems, onRemoveAllFromBasket, onChangeQuantity }: { 
    basketItems: BasketItem[],
    onRemoveAllFromBasket: (productId: number) => void,
    onChangeQuantity: (productId: number, quantity: number) => void
  }) => {
    
    return (
        <div>
            <h1>Basket</h1>
            {basketItems.length === 0 ? (
          <h2>Korgen är tom.</h2>
        ) : (
            <>
            {basketItems.map((product: BasketItem) => (
                <div key={product.product.id}>
                    <img src={product.product.image} alt={product.product.title} style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                    <h3>{product.product.title}</h3>
                    <p>${product.product.price}</p>
                    <input 
                        type="number" 
                        value={product.quantity}
                        onChange={(e) => {
                            const value = e.target.value;
                            const newQuantity = value === '' ? product.quantity : Math.max(1, parseInt(value) || 1);
                            onChangeQuantity(product.product.id, newQuantity);
                        }}
                        min={1}
                    />
                    <button onClick={() => onRemoveAllFromBasket(product.product.id)}>Remove</button>
                </div>
            ))}
            </>
        )}
        </div>
    )
}

export default Basket;