import './App.css';
import Basket from './components/Basket';

const App = () => {
  return (
    <div className="content">
      <h1>Basket Router</h1>
      <Basket basketItems={[]} onRemoveAllFromBasket={() => {}} onChangeQuantity={() => {}} />
    </div>
  );
};

export default App;
