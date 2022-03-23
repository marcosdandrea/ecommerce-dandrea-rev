import { createContext, useState } from 'react'

export const CartContext = createContext([])

export function CartContextProvider({ children }) {
    let [itemsInCart, setItemsInCart] = useState([])

    function onAdd(itemsToAdd) {

        let existingItems = itemsInCart.find(item => item.itemID === itemsToAdd.itemID)
        let newIntemsInCart = []

        if (existingItems !== undefined) {
            existingItems.itemAmount += itemsToAdd.itemAmount
            existingItems.itemPrice += itemsToAdd.itemPrice
        } else {
            newIntemsInCart = [...itemsInCart, itemsToAdd];
        }

        setItemsInCart(newIntemsInCart)
    }

    function onDelete(itemToDelete) {
        let existingItems = itemsInCart.findIndex(item => item.itemID === itemToDelete.itemID)
        let newIntemsInCart = []

        if (existingItems !== undefined) {
            itemsInCart.splice(existingItems)
            newIntemsInCart = itemsInCart;
        }

        setItemsInCart(newIntemsInCart)
    }

    return (
        <CartContext.Provider value={{ itemsInCart, onAdd, onDelete }}>
            {children}
        </CartContext.Provider>
    )

}