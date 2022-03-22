import * as React from 'react';
import { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import StyledBadge from './badge'
import {Link} from 'react-router-dom'
import './cartButton.css'

export default function CartButton(props) {

  const [itemsAmount, setItemsAmount] = useState(0)

  useEffect(() => {
    setItemsAmount(countItemsInCart())    
  },[props])

  const countItemsInCart = () => {
    let acumulator = 0;
    props.itemsInCart.forEach(item => {
        acumulator += item.itemAmount;
      })
      return(acumulator)
  }

  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '3em'
      }}
      display={{
        xs: "none",
        sm: "none",
        md: "flex"
      }}
    >
      <Link to={"/cart"}>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={itemsAmount} color="success">
          <ShoppingCartIcon className="cart"/>
        </StyledBadge>
      </IconButton>
      </Link>
    </Box>
  );
}