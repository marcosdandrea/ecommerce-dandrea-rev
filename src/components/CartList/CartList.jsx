import React from 'react'
import CartItem from '../CartItem/CartItem'
import CartTotalPrice from '../CartTotalPrice/CartTotalPrice'
import './cartList.css'

export default function CartList({ itemsInCart, onDelete }) {

    function MoneyAmount(){
        let acumulator = 0;
        itemsInCart.forEach(item => {
            acumulator += (item.itemPrice * item.itemAmount)
        })
        return acumulator
    }

    return (
        <div className="cartList">
            {itemsInCart.map(item => {
                return (
                    <CartItem key={item.itemID} item={item} onDelete={onDelete} />
                )
            })}
            <CartTotalPrice totalPrice={MoneyAmount()}/>
        </div>
    )
}
