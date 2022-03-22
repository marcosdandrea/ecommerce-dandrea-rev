import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Typography, Stack, CardMedia, Button } from '@mui/material';
import ItemAmountSelector from "../ItemAmountSelector/ItemAmountSelector"
import CartContext from '../contexts/CartContext'
import './itemDetail.css'

export default function ItemDetail(props) {
    
    const { onAdd } = useContext (CartContext)
    const [ buyMode, setBuyMode ] = useState(false)
    const currentItem = props.itemData;

    const _onAdd = (selectedAmount) => {
        setBuyMode(true)
        onAdd(
            {
                "itemID": currentItem.id,
                "itemName": currentItem.title,
                "itemAmount": selectedAmount,
                "itemPrice": currentItem.price,
                "itemImg": currentItem.image,
                "itemCat": currentItem.category
            }
        )        
    }

      
    return (
        <Stack
            direction="column"
            spacing={2}
            className="itemDetail"
        >
            <Typography
                variant="h4"
                component="h2"
                className="header"
            >Detalles del Producto</Typography>
            <CardMedia
                component="img"
                width="100%"
                height="100%"
                image={currentItem.image}
                alt={currentItem.altImg}
            />
            <Stack
                direction="column"
                spacing={2}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-around"
                    className="productTitle"
                >
                    <Typography
                        className="productName"
                    >{currentItem.title}</Typography>
                    <Typography
                        className="productPrice"

                    >$  {currentItem.price}</Typography>

                </Stack>
                <Stack
                    direction="column"
                    spacing={2}
                >
                    <Typography
                        component="p"
                    >{currentItem.paragraph}</Typography>
                </Stack>
            </Stack>
            {buyMode == false ? <ItemAmountSelector 
                    buyMode={buyMode}
                    initialValue={0}
                    stock={currentItem.stock}
                    onAdd={_onAdd}
            /> : <Link to="/cart" className="btnGoToCart">
            <Button
            variant="contained"
            color="success"
            >Terminar Compra</Button>
            </Link>}
        </Stack>
    )
}
