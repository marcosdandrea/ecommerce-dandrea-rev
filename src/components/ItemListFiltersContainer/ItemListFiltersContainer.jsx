import React from 'react'
import ItemListFilterCategory from '../ItemListFilterCategory/ItemListFilterCategory'
import ItemListFilterPrice from '../ItemListFilterPrice/ItemListFilterPrice'
import "./itemListFiltersContainer.css"

export default function ItemListFiltersContainer({ minPrice, maxPrice, prods, onFilterCategory, onFilterPrice }) {
    return (
        <div className="itemListArrangerContainer">
            <ItemListFilterCategory
                prods={prods}
                onFilterCategory={onFilterCategory}
            />
            <ItemListFilterPrice
                maxPrice={maxPrice}
                minPrice={minPrice}
                onFilterPrice={onFilterPrice}
            />
        </div>
    )
}
