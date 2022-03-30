import { createContext, useState } from 'react'

export const CartContext = createContext([])

export function CartContextProvider({ children }) {
    let [itemsInCart, setItemsInCart] = useState([])

    function onAdd(itemsToAdd) {
        let existingItems = itemsInCart.find(item => item.itemID === itemsToAdd.itemID)
        let newIntemsInCart        

        if (existingItems !== undefined) {
            existingItems.itemAmount += itemsToAdd.itemAmount
            existingItems.itemPrice += itemsToAdd.itemPrice
            newIntemsInCart = [...itemsInCart];
            setItemsInCart(newIntemsInCart)
        } else {
            newIntemsInCart = [...itemsInCart, itemsToAdd];
            setItemsInCart(newIntemsInCart)
        }

        
        
    }

    function onDelete(itemToDelete) {
        let existingItems = itemsInCart.findIndex(item => item.itemID === itemToDelete.itemID)

        if (existingItems !== undefined) {
            itemsInCart.splice(existingItems)
            setItemsInCart([...itemsInCart])
        }
        
    }
    console.log (itemsInCart)
    return (
        <CartContext.Provider value={{ itemsInCart, setItemsInCart, onAdd, onDelete }}>
            {children}
        </CartContext.Provider>
    )

}