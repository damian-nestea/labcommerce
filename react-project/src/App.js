import React, { useEffect } from 'react'
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
  const [minFilter, setMinFilter] = React.useState("");
  const [maxFilter, setMaxFilter] = React.useState("");
  const [searchFilter, setSearchFilter] = React.useState("");
  const [car, setCar] = React.useState(
      localStorage.getItem("CarroDeCompras") ? JSON.parse(localStorage.getItem("CarroDeCompras")):[]
  );
  const [amount, setAmount] = React.useState(
      localStorage.getItem("ValorTotal") ? JSON.parse(localStorage.getItem("ValorTotal")): 0
  );


  /* Funções para setar estados de filtros */
  const onChangeMinFilter = (e) => {
    e.target.value >= 0 ? setMinFilter(e.target.value):alert(`Só valores positivos!`);
  }
  const onChangeMaxFilter = (e) => {
    e.target.value >= 0 ? setMaxFilter(e.target.value):alert(`Só valores positivos!`);
  }               
  const onChangeSearchFilter = (e) => {
    setSearchFilter(e.target.value);
  }

  /* Função para limpar filtros */
  const limparFiltros = () => {
    setMinFilter("");
    setMaxFilter("");
    setSearchFilter("");
  }

  /* Funções para adicionar e remover itens do carrinho de compras */
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
      setAmount(amount+item.price)
      return;
    }
    // Adiciona no carrinho de compras caso não tenha adicionado antes, adicionando a propriedade quantity com 1 unidade
    setCar((car) => [
      ...car,
      { ...item, quantity: 1 }
    ]);
    setAmount(amount+item.price)
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

  /* UseEffect para controle de carrinho de compras e recuperação de dados do localStorage */
  useEffect(() => {
    if(localStorage.getItem("CarroDeCompras")){
      setCar(JSON.parse(localStorage.getItem("CarroDeCompras")))
    }
} , [] );

  useEffect(()=>{
    localStorage.setItem("CarroDeCompras", JSON.stringify(car))
  },[car])


  /* UseEffect para controle de valor total do carrinho e recuperação de dados do localStorage */
  useEffect(() => {
    if(localStorage.getItem("ValorTotal")){
      setAmount(JSON.parse(localStorage.getItem("ValorTotal")))
    }
} , [] );

  useEffect(()=>{
    localStorage.setItem("ValorTotal", JSON.stringify(amount))
  },[amount])

  
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
          limparFiltros = {limparFiltros}
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
