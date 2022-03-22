import React from 'react'
import CartList from '../CartList/CartList'
import './cartListContainer.css'

export default function CartListContainer({ itemsInCart, onDelete }) {
  return (
      <div className="cartListContainer">
        <CartList itemsInCart={itemsInCart} onDelete={onDelete} />
    </div>
  )
}
