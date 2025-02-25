import { Provider } from 'react-redux';
import { store } from '../store';
import ProductList from './ProductList';

export default function ProductListWithProvider() {
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
} 