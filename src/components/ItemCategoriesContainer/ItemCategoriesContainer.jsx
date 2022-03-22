import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getFetch } from '../../data/Database'
import ItemCategories from '../ItemCategories/ItemCategories'

import "./itemCategoriesContainer.css"

export default function ItemCateogriesContainer() {
  
  const { categoryID } = useParams()
  const [allProducts, setAllProds] = useState([])
  let [filteredProds, setFilteredProds] = useState([])

  useEffect(() =>{
    getFetch
    .then((res) => {
        setAllProds (res)
        filteredProds = res.filter(p => p.category === categoryID)
        setFilteredProds (filteredProds)
    })
  }, [])

  useEffect(() =>{
    
    setFilteredProds (allProducts.filter(p => p.category === categoryID))
  }, [categoryID])

  return(
    <ItemCategories
      prods={filteredProds}
    />
  )
}
