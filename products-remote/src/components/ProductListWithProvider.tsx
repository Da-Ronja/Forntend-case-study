import { Provider } from 'react-redux';
import { store } from '../store';
import ProductList from './ProductList';
import { Product } from '../types/product';

export default function ProductListWithProvider({onAddToBasket}: {onAddToBasket: (product: Product) => void}) {
  return (
    <Provider store={store}>
      <ProductList onAddToBasket={onAddToBasket} />
    </Provider>
  );
} 