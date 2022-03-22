import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material/'
import { CardActionArea } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './cartItem.css'

export default function CartItem({item, onDelete}) {
  let pesosArgentinos = Intl.NumberFormat('es-AR');

  
  return (
    <Card sx={{ maxWidth: 345 }} key={item.itemID} className="cartItem">
      <CardActionArea>
        <Stack direction="row">
          <CardMedia
            component="img"
            height="140"
            image={item.itemImg}
            alt="green iguana"
            className="cartImg"
          />
          <CardContent>
            <Stack direction="column">
              <Typography gutterBottom variant="h5" component="div">
                {item.itemName}
              </Typography>
              <Typography >
                Cantidad: {item.itemAmount}
              </Typography>
              <Typography >
                <strong>subtotal: ${pesosArgentinos.format((item.itemPrice * item.itemAmount))}</strong>
              </Typography>
            </Stack>
          </CardContent>

        </Stack>

      </CardActionArea >
      <CardActionArea className="deleteIconContainer" onClick={() => { onDelete(item.itemID) }}>
        <DeleteOutlineIcon className="deleteIcon"  />
      </CardActionArea>
    </Card>
  )
}
