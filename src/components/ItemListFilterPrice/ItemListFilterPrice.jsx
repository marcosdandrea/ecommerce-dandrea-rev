import React, {useEffect, useState} from 'react'
import { Slider, Stack, Typography } from "@mui/material"
import "./itemListFilterPrice.css"
let pesosArgentinos = Intl.NumberFormat('es-AR');

export default function ItemListFilterPrice({ maxPrice, minPrice, onFilterPrice }) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [value, setValue] = useState([0, 0]);

    useEffect(() => {
        setValue ([minPrice, maxPrice])
        setMin (minPrice) 
        setMax (maxPrice)         
    }, [minPrice, maxPrice])


    const handleChange = (event, newValue) => {
        setValue(newValue);
        
    };
    
    const applyChange = () =>{
        onFilterPrice(value)
    }

    return (

            <Stack direction="row" className="priceFilter">
                <Typography className="label left">${pesosArgentinos.format(value[0])}</Typography>
                <Slider
                    getAriaLabel={() => 'Price range'}
                    value={value}
                    onChange={handleChange}
                    onMouseUp={applyChange}
                    valueLabelDisplay="auto"
                    step={100}
                    marks
                    min={min}
                    max={max}
                    className="slider"
                />
                <Typography className="label right">${pesosArgentinos.format(value[1])}</Typography>
            </Stack>

    )
}
