import React from 'react'
import { Typography, Button } from '@mui/material'
import './cartTotalPrice.css'

export default function CartTotalPrice({ totalPrice }) {
  let pesosArgentinos = Intl.NumberFormat('es-AR');

  if (totalPrice === 0) {
    return (
      <Typography>Aún no hay items en tu carrito de compras...</Typography>
    )
  } else {
    return (
      <div className="totalPrice">
        <Typography><strong>Total Price: ${pesosArgentinos.format(totalPrice)}</strong></Typography>
        <Button variant="contained">Proceed to Checkout</Button>
      </div>
    )
  }
}
