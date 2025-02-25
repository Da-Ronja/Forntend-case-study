import ProductList from '../components/ProductList';
import { Product } from '../types/product';

export default function Home() {
  const handleAddToBasket = (product: Product) => {
    console.log("Add to basket", product);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductList onAddToBasket={handleAddToBasket} />
    </main>
  );
}
