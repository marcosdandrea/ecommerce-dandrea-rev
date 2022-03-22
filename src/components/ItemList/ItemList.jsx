import React from 'react'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'
import './itemList.css'
export default function ItemList(props) {

    const onAdd = (selectedAmount) => {
        props.onAdd(selectedAmount)
    }

    return (
        <div className="itemList">
            {props.prods.map((prod) => {
                return (
                    <Link to={"/shop/"+prod.id} key={prod.id} className="item">
                        <Item     
                            id={prod.id}  
                            price={prod.price}                     
                            title={prod.title}
                            paragraph={prod.paragraph}
                            image={prod.image}
                            altImg={prod.altImg}
                            stock={prod.stock}
                            category={prod.category}
                            onAdd={onAdd}
                        />
                    </Link>
                )
            })}
        </div>
    )
}
