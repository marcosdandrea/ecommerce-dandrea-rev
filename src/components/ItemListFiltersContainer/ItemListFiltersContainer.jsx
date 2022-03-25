import React, { useState, useEffect } from 'react'
import ItemListFilterCategory from '../ItemListFilterCategory/ItemListFilterCategory'
import ItemListFilterPrice from '../ItemListFilterPrice/ItemListFilterPrice'
import "./itemListFiltersContainer.css"

export default function ItemListFiltersContainer({ products, onFilterCategory, onFilterPrice }) {

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    let [categoryFilters, setCategoryFilters] = useState([])

    useEffect(() => {
        if (products === undefined || products.length === 0) return

        if (categoryFilters.length > 1) return
            categoryFilters = ["All products"]
            products.forEach(item => {
                if (!categoryFilters.includes(item.category)) {
                    categoryFilters.push(item.category);
                }
            })
            setCategoryFilters(categoryFilters);

        const priceList = products.map(product => (product.price))
        setMinPrice(Math.min(...priceList))
        setMaxPrice(Math.max(...priceList))

    }, [products])


    if (maxPrice != minPrice) {
        return (
            <div className="itemListArrangerContainer">
                <ItemListFilterCategory
                    categoryFilters={categoryFilters}
                    onFilterCategory={onFilterCategory}
                />
                <ItemListFilterPrice
                    maxPrice={maxPrice}
                    minPrice={minPrice}
                    onFilterPrice={onFilterPrice}
                />
            </div>
        )
    } else {
        return (
            <div className="itemListArrangerContainer">
                <ItemListFilterCategory
                    categoryFilters={categoryFilters}
                    onFilterCategory={onFilterCategory}
                />
            </div>
        )
    }
}
