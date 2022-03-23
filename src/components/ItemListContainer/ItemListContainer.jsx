import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getFetch } from '../../data/Database'
import { Typography } from '@mui/material'
import CachedIcon from '@mui/icons-material/Cached';
import './itemListContainer.css'
import ItemListFiltersContainer from '../ItemListFiltersContainer/ItemListFiltersContainer';
import AlertDialog from '../AlertDialog/AlertDialog';
import { collection, getFirestore, getDocs } from 'firebase/firestore'


export default function ItemListContainer({props}) {

    const [allProds, setAllProds] = useState([])
    const [prods, setProds] = useState([])
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    let [priceFilter, setPriceFilter] = useState([0, 9999999])
    let [categoryFilter, setCategoryFilter] = useState("All products")

/*      useEffect(() => {
        getFetch
            .then((res) => {
                setMinPrice (res.reduce((acc, prod) => acc = acc < prod.price ? acc : prod.price))
                setMaxPrice (res.reduce((acc, prod) => acc = acc > prod.price ? acc : prod.price))
                setAllProds(res)
                setProds(res)
            })
    }, [])  */

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'products')
        getDocs(queryCollection)
            .then((results) => {
                const prods = results.docs.map( item => ({id: item.id, ...item.data()}))
                setMinPrice (prods.reduce((acc, prod) => acc = acc < prod.price ? acc : prod.price))
                setMaxPrice (prods.reduce((acc, prod) => acc = acc > prod.price ? acc : prod.price))
                setAllProds(prods)
                setProds(prods)
            })
      },[])

    const onFilterCategory = (filter) => {
        categoryFilter = filter;
        applyFilters()
        setCategoryFilter(filter)
    }

    const onFilterPrice = (filter) => {        
        priceFilter = filter;
        applyFilters()
        setPriceFilter(filter)
    }

    const applyFilters = () => {
        let filteredProds = 0;
        if (categoryFilter.toLowerCase() === "all products") {
            filteredProds = allProds.filter((item) => {
                return (
                    item.price >= priceFilter[0] &&
                    item.price <= priceFilter[1]
                )
            })
        } else {
            filteredProds = allProds.filter((item) => {
                return (
                    item.category.toLowerCase() === categoryFilter.toLowerCase() &&
                    item.price > priceFilter[0] &&
                    item.price < priceFilter[1]
                )
            })

        }
        if (filteredProds.length !== 0) {
            setProds(filteredProds)
        } else {
            setProds(["none"]);
        }
    }

    const clearFilters = () => {
        categoryFilter = "All products"
        priceFilter = [minPrice, maxPrice]
        applyFilters()
        setPriceFilter(priceFilter)
        setCategoryFilter(categoryFilter)
    }


    if (prods.length === 0) {
        return (<div className="loadingStyle"><Typography><strong>Loading </strong> </Typography><CachedIcon className="loadingIcon" /></div>)
    } else {
        if (prods[0] === "none") {
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
                    <ItemListFiltersContainer
                        prods={prods}
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        onFilterCategory={onFilterCategory}
                        onFilterPrice={onFilterPrice}
                    />
                    <ItemList
                        prods={prods}
                    />
                </div>
            )
        }
    }


}
