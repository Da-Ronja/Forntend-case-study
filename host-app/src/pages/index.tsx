import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeAllItems, changeQuantity } from "../features/basketSlice";
import { RootState } from "../store";
import { Product } from "remote_product_types/types/product";
import { BasketItem } from "remote_basket_types/types/basket";

const Product = dynamic<{ onAddToBasket: (product: Product) => void }>(
  () => import("remote_product/ProductList"),
  { ssr: false }
);


const Basket = dynamic<{ 
  basketItems: BasketItem[] 
  onRemoveAllFromBasket: (product: Product) => void
  onChangeQuantity: (productId: number, quantity: number) => void
}>(
  () => import("remote_basket/Basket"), 
  { ssr: false,}
);

export default function Home() {
  const dispatch = useDispatch();
  const basketItems = useSelector((state: RootState) => state.basket.items);

  const handleAddToBasket = (product: Product) => {
      dispatch(addItem(product));
  };

  const handleRemoveFromBasket = (productId: number) => {
    const productToRemove = basketItems.find((item: { product: { id: number; }; }) => item.product.id === productId)?.product;
    if (productToRemove) {
      dispatch(removeAllItems(productToRemove));
    }
  };

  const handleChangeQuantity = (productId: number, quantity: number) => {
    dispatch(changeQuantity({ productId, quantity }));
  };
  
  return (
    <>
      <main className={styles.main}>
        <h1>Host App</h1>
        <Basket 
          basketItems={basketItems} 
          onRemoveAllFromBasket={handleRemoveFromBasket} 
          onChangeQuantity={handleChangeQuantity}
        />
        <Product onAddToBasket={handleAddToBasket} />
      </main>
    </>
  );
}