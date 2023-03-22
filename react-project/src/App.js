import React from 'react'
import './App.css';
import { GlobalStyle } from './GlobalStyle'
import { Filters } from './Components/Filters/Filters'
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ProductList/ShoppingCart/Cart/Cart';
import { ItemsList } from './Components/assets/productList';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';

function App() {
  /* Criação de estados para filtros dos produtos e dados do carrinho de compras */
  const [minFilter, setMinFilter] = React.useState(-Infinity);
  const [maxFilter, setMaxFilter] = React.useState(Infinity);
  const [searchFilter, setSearchFilter] = React.useState("");
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
      setAmount(amount+item.price)
      return;
    }
    // Adiciona no carrinho de compras caso não tenha adicionado antes, adicionando a propriedade quantity com 1 unidade
    setCar((car) => [
      ...car,
      { ...item, quantity: 1 }
    ]);
    setAmount(amount+item.price)
    console.log(car)
  }

  const removeFromCart = (produto) => {
    setCar((car) =>
      car.flatMap((cartItem) =>
        cartItem.id === produto.id
          ? cartItem.quantity - 1 < 1
            ? [] // remove o item se a quantidade for 1 ou menor
            : [
                {
                  ...cartItem,
                  quantity: cartItem.quantity - 1
                }
              ]
          : [cartItem]
      )
    );
    setAmount(amount-produto.price)
  };

  return (
    <div>
      <GlobalStyle />
      <Header />
        <div className="App">
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
          searchFilter = {searchFilter}
          minFilter = {minFilter}
          maxFilter = {maxFilter}
        />
        <Cart
          car = {car}
          setCar = {setCar}
          amount = {amount}
          setAmount = {setAmount}
          removeFromCart = {removeFromCart}
          addToCart = {addToCart}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
