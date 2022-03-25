import React from 'react'
import { Typography, Button, Paper } from '@mui/material'
import './cartTotalPrice.css'

export default function CartTotalPrice({ totalPrice, checkOutEnabled, checkOut }) {
  let pesosArgentinos = Intl.NumberFormat('es-AR');
    return (
      <Paper className="totalPrice">
        <Typography><strong>Total Price: ${pesosArgentinos.format(totalPrice)}</strong></Typography>
        <Button onClick={checkOut} className="btnProceed" variant="contained" disabled={!checkOutEnabled} >Proceed to Checkout</Button>
      </Paper>
    )
  
}
