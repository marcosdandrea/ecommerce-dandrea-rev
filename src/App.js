import './App.css';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Stack } from '@mui/material'
import Header from './components/Header/Header.jsx'
import HomeSection from './components/HomeSection/HomeSection'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartListContainer from './components/CartListContainer/CartListContainer';
import ItemCategoriesContainer from './components/ItemCategoriesContainer/ItemCategoriesContainer';

function App() {

  /*
    Tuve que agregar el state "number" que no hace nada porque
    este cambio de estado SI LLAMA AL RENDER pero cuando modifico
    el array "itemsInCart" NO LLAMA AL RENDER por si mismo.
    No entiendo que estoy haciendo mal.
  */

  let [itemsInCart, setItemsInCart] = useState([])

  let [number, setNumber] = useState(0)

  function onAdd(itemsToAdd) {

    let existingItems = itemsInCart.find(item => item.itemID === itemsToAdd.itemID)

    if (existingItems !== undefined) {
      existingItems.itemAmount += itemsToAdd.itemAmount
      existingItems.itemPrice += itemsToAdd.itemPrice
    } else {
      itemsInCart.push(itemsToAdd)
    }

    setItemsInCart(itemsInCart)
    setNumber(number + 1) //si elimino esta funcion, el componente no renderiza
  }

  function onDelete(itemToDelete) {
    let existingItems = itemsInCart.findIndex(item => item.itemID === itemToDelete.itemID)

    if (existingItems !== undefined) {
      itemsInCart.splice(existingItems)
    }

    setItemsInCart(itemsInCart)
    setNumber(number + 1) //si elimino esta funcion, el componente no renderiza
  }

  return (
    <div>
      <BrowserRouter>
        <Stack
          direction="column"
          spacing={2}>
          <Header
            itemsInCart={itemsInCart} />
          <Routes>
            <Route exact path="/" element={<HomeSection />} />
            <Route exact path="/shop" element={<ItemListContainer onAdd={onAdd} />} />
            <Route exact path="/shop/:productId" element={<ItemDetailContainer onAdd={onAdd} />} />
            <Route exact path="/shop/categories/:categoryID" element={<ItemCategoriesContainer onAdd={onAdd}/>} />
            <Route exact path="/cart" element={<CartListContainer itemsInCart={itemsInCart} onDelete={onDelete} />} />
          </Routes>

        </Stack>
      </BrowserRouter>
    </div>
  );
}

export default App;
