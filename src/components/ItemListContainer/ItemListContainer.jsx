import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { Typography } from '@mui/material'
import CachedIcon from '@mui/icons-material/Cached';
import './itemListContainer.css'
import ItemListFiltersContainer from '../ItemListFiltersContainer/ItemListFiltersContainer';
import AlertDialog from '../AlertDialog/AlertDialog';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'


export default function ItemListContainer() {

    const [products, setProducts] = useState([0])
    const [priceFilter, setPriceFilter] = useState([0, 9999999])
    const [categoryFilter, setCategoryFilter] = useState("All products")
    const [filtering, setFiltering] = useState(false)

    useEffect(() => {
        const database = getFirestore();
        const queryCollection = collection(database, "products")
        getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
    }, [])

    useEffect(() => {
        setFiltering(false)
    }, [products])

    const onFilterCategory = (filter) => {
        setFiltering(true)
        setCategoryFilter(filter)
    }

    const onFilterPrice = (filter) => {
        setFiltering(true)
        setPriceFilter(filter)
    }

    useEffect(() => {
        const database = getFirestore();
        //console.log (categoryFilter, priceFilter)
        let databaseQuery
        if (categoryFilter.toLocaleLowerCase() == "all products") {
            databaseQuery = query(
                collection(database, "products"),
                where("price", "<=", priceFilter[1]),
                where("price", ">=", priceFilter[0]),
            );
        } else {
            databaseQuery = query(
                collection(database, "products"),
                where("price", "<=", priceFilter[1]),
                where("price", ">=", priceFilter[0]),
                where("category", "==", categoryFilter.toLocaleLowerCase())
            );
        }
        getDocs(databaseQuery).then((results) => {
            setProducts(results.docs.map(res => ({ id: res.id, ...res.data() })))
        })
    }, [categoryFilter, priceFilter])


    const clearFilters = () => {
        setPriceFilter([0, 9999999])
        setCategoryFilter("All products")
    }


    if (products[0] === 0) {

        return (<div className="loadingStyle"><Typography><strong>Loading </strong> </Typography><CachedIcon className="loadingIcon" /></div>)
    } else {
        if (products.length === 0) {
            return (
                <AlertDialog
                    title="No hay resultados"
                    message="No se encontraron resultados para los filtros seleccionados"
                    onAceptDialog={clearFilters}
                />
            )
        } else {
            return (
                <div className="itemListContainer">
                    <div className={filtering ? "showProcesing processing" : "hideProcesing processing"} >
                        <Typography><strong>Loading </strong> </Typography><CachedIcon className="loadingIcon" />
                    </div>
                    <ItemListFiltersContainer
                        products={products}
                        onFilterCategory={onFilterCategory}
                        onFilterPrice={onFilterPrice}
                    />
                    <ItemList
                        prods={products}
                    />
                </div>
            )
        }
    }


}
