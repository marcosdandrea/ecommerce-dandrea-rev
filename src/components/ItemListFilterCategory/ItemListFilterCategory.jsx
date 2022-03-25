import React, { useState, useEffect } from 'react'
import { Card, Button, Menu, MenuItem } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './itemListFilterCategory.css'

export default function ItemListFilterCategory({ categoryFilters, onFilterCategory }) {

    const [currentCategory, setCurrentCategory] = useState("All products")
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);      
    };

    const handleClose = (event) => {
        setAnchorEl(null);
        if (event.currentTarget.innerText === "") return
        setCurrentCategory(event.currentTarget.innerText)      
        onFilterCategory(event.currentTarget.innerText)
      };

    return (
        <Card className="itemListArranger">
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="filterButton"
                variant="contained"
            >
               <FilterAltIcon/>&nbsp;<strong>{currentCategory.toUpperCase()}</strong>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl} 
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {categoryFilters.map(category => {
                     return(
                        <MenuItem key={category} onClick={handleClose} className="menuButtons">{category}</MenuItem>
                     )
                })}

            </Menu>

        </Card>
    )
}
