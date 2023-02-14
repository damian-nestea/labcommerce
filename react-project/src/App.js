import './App.css';
import { Filters } from './Components/Filters/Filters'
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ProductList/ShoppingCart/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Filters/>
      <Home />
      <Cart />
    </div>
  );
}

export default App;
