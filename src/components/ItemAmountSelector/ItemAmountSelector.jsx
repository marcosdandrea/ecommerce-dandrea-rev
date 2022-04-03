import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './ItemAmountSelector.css'

export default function ItemCount({ initialValue = 1, stock = 0, onAdd }) {

    let [selectedAmount, setSelectedAmount] = useState(initialValue);
    let [stockAmount, setStockAmount] = useState(stock);

    function addItems(evnt) {
        evnt.preventDefault();
        setSelectedAmount(selectedAmount + 1)
    }

    function substractItems(evnt) {
        evnt.preventDefault();
        setSelectedAmount(selectedAmount - 1)
    }

    function addToCart(evnt) {
        evnt.preventDefault();
        onAdd(selectedAmount)
        setStockAmount(stockAmount - selectedAmount)
        setSelectedAmount(0)
    }

    function preventDefault(evnt) {
        evnt.preventDefault();
    }

        return (
            <div onClick={preventDefault}>
                <Stack
                    direction="row"
                    spacing={2}
                    className='amountSelectorWrapper'
                >
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        className="amountSelector"
                    >
                        <Button
                            variant="contained"
                            disableElevation
                            className="controlButtonMinus"
                            onClick={substractItems}
                            disabled={selectedAmount === 0}
                        >-</Button>
                        <Typography
                            className="displaySelector"
                        >{selectedAmount}</Typography>
                        <Button
                            variant="contained"
                            disableElevation
                            className="controlButtonPlus"
                            onClick={addItems}
                            disabled={selectedAmount === stockAmount}
                        >+</Button>
                    </Stack>

                    <Button
                        variant="contained"
                        className="addButton"
                        onClick={addToCart}
                        disabled={selectedAmount === 0}
                    >Agregar al Carrito</Button>
                </Stack>
            </div>
        )
    
}
