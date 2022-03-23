import { useState, useEffect, useContext} from 'react'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import StyledBadge from './badge'
import {Link} from 'react-router-dom'
import {CartContext} from '../contexts/CartContext'
import './cartButton.css'

export default function CartButton() {

  const { itemsInCart } = useContext (CartContext)
  const [itemsAmount, setItemsAmount] = useState(0)

  useEffect(() => {
    let acumulator = 0;
    itemsInCart.forEach(item => {
        acumulator += item.itemAmount;
      })
    setItemsAmount(acumulator)    
  },[itemsInCart])

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