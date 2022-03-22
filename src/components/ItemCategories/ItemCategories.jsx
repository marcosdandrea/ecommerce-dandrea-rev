import React, { useContext } from 'react'
import "./itemCategories.css"
import { Button } from '@mui/material'
import { Link } from "react-router-dom"
import ItemList from '../ItemList/ItemList'
import CartContext from '../contexts/CartContext'

export default function ItemCategories(props) {

    const { onAdd } = useContext(CartContext)

    return (
        <>
            <ItemList
                prods={props.prods}
            />
            <Link to="../../shop" className="btnBackLink">
                <Button
                    variant="contained"
                    className="btnBack"
                >Back to all products</Button>
            </Link>
        </>
    )
}
