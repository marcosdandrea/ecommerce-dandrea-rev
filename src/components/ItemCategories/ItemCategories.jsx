import React from 'react'
import "./itemCategories.css"
import { Button } from '@mui/material'
import { Link } from "react-router-dom"
import ItemList from '../ItemList/ItemList'

export default function ItemCategories(props) {

    const onAdd = (params) => {
        props.onAdd(params)
    }

    return (
        <>
            <ItemList
                onAdd={onAdd}
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
