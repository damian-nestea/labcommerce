import './App.css';
import { GlobalStyle } from './GlobalStyle'
import { Filters } from './Components/Filters/Filters'
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ProductList/ShoppingCart/Cart/Cart';
import { ItemsList } from './Components/assets/productList';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Filters/>
      <Home
        ItemsList = {ItemsList}
      />
      <Cart />
    </div>
  );
}

export default App;
