import React from 'react'
import CartList from '../CartList/CartList'
import './cartListContainer.css'

export default function CartListContainer({ itemsInCart }) {
  return (
      <div className="cartListContainer">
        <CartList itemsInCart={itemsInCart} />
    </div>
  )
}
