import React from 'react'
import './App.css';
import { GlobalStyle } from './GlobalStyle'
import { Filters } from './Components/Filters/Filters'
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ProductList/ShoppingCart/Cart/Cart';
import { ItemsList } from './Components/assets/productList';

function App() {
  /* Criação de estados para filtros dos produtos e dados do carrinho de compras */
  const [minFilter, setMinFilter] = React.useState("1");
  const [maxFilter, setMaxFilter] = React.useState("2");
  const [searchFilter, setSearchFilter] = React.useState("C");
  const [car, setCar] = React.useState([]);
  const [amount, setAmount] = React.useState(0);

  const onChangeMinFilter = (e) =>{
    e.target.value >= 0 ? setMinFilter(e.target.value):alert(`Só valores positivos!`);
  }
  const onChangeMaxFilter = (e) =>{
    e.target.value >= 0 ? setMaxFilter(e.target.value):alert(`Só valores positivos!`);
  }

  const onChangeSearchFilter = (e) =>{
    setSearchFilter(e.target.value);
  }

  const addToCart = (item) => {
    // adiciona no carrinho, caso já exista um item com o mesmo id, adiciona 1 unidade na quantidade
    if (car.some((cartItem) => cartItem.id === item.id)) {
      setCar((car) =>
        car.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1
              }
            : cartItem
        )
      );
      console.log(car)
      return;
    }
    // Adiciona no carrinho de compras caso não tenha adicionado antes, adicionando a propriedade quantity com 1 unidade
    setCar((car) => [
      ...car,
      { ...item, quantity: 1 }
    ]);
    console.log(car)
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Filters
        minFilter = {minFilter}
        onChangeMinFilter ={onChangeMinFilter}
        maxFilter = {maxFilter}
        onChangeMaxFilter ={onChangeMaxFilter}
        searchFilter = {searchFilter}
        onChangeSearchFilter ={onChangeSearchFilter}
      />
      <Home
        ItemsList = {ItemsList}
        car = {car}
        setCar = {setCar}
        amount = {amount}
        setAmount = {setAmount}
        addToCart = {addToCart}
      />
      <Cart
        car = {car}
        setCar = {setCar}
        amount = {amount}
        setAmount = {setAmount}
      />
    </div>
  );
}

export default App;
