import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Stack } from '@mui/material'
import Header from './components/Header/Header.jsx'
import HomeSection from './components/HomeSection/HomeSection'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartListContainer from './components/CartListContainer/CartListContainer';
import ItemCategoriesContainer from './components/ItemCategoriesContainer/ItemCategoriesContainer';
import getFirestoreApp from './components/firebase/config';
import { CartContextProvider } from './components/contexts/CartContext'

getFirestoreApp()

function App() {

  return (
    <div>
      <BrowserRouter>
          <CartContextProvider>
            <Stack
              direction="column"
              spacing={2}>
              <Header />
              <Routes>
                <Route exact path="/" element={<HomeSection />} />
                <Route exact path="/shop" element={<ItemListContainer />} />
                <Route exact path="/shop/:productId" element={<ItemDetailContainer />} />
                <Route exact path="/shop/categories/:categoryID" element={<ItemCategoriesContainer />} />
                <Route exact path="/cart" element={<CartListContainer />} />
              </Routes>
            </Stack>
          </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
