import './App.css';
import { GlobalStyle } from './GlobalStyle'
import { Filters } from './Components/Filters/Filters'
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ProductList/ShoppingCart/Cart/Cart';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Filters/>
      <Home />
      <Cart />
    </div>
  );
}

export default App;
