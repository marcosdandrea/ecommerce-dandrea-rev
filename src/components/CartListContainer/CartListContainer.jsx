import React, { useContext } from 'react'
import CartList from '../CartList/CartList'
import {CartContext} from '../contexts/CartContext'
import './cartListContainer.css'

export default function CartListContainer() {
  const { itemsInCart } = useContext (CartContext)
  return (
      <div className="cartListContainer">
        <CartList itemsInCart={itemsInCart} />
    </div>
  )
}
