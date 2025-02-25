import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/basketSlice";
import { RootState } from "../store";
import { Product } from "remote_product_types/types/product";

const Product = dynamic<{ onAddToBasket: (product: Product) => void }>(
  () => import("remote_product/ProductList"),
  { ssr: false }
);


const Basket = dynamic(() => import("remote_basket/Basket"), {
  ssr: false,
});

export default function Home() {
  const dispatch = useDispatch();
  const basketItems = useSelector((state: RootState) => state.basket.items);

  const handleAddToBasket = (product: Product) => {
      dispatch(addItem(product));
  };
  
  return (
    <>
      <main className={styles.main}>
        <h1>Host App</h1>
        <ul>
          {basketItems.map((item, i) => (
            <li key={item.product.id}>{item.product.title} - ${item.product.price} x {item.quantity}</li>
          ))}
        </ul>
        <Basket />
        <Product onAddToBasket={handleAddToBasket} />
      </main>
    </>
  );
}