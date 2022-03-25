import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ItemCategories from '../ItemCategories/ItemCategories'

import "./itemCategoriesContainer.css"

export default function ItemCateogriesContainer() {
  
  const { categoryID } = useParams()
  const [allProducts, setAllProds] = useState([])
  let [filteredProds, setFilteredProds] = useState([])

  useEffect(() =>{
    
    setFilteredProds (allProducts.filter(p => p.category === categoryID))
  }, [categoryID])

  return(
    <ItemCategories
      prods={filteredProds}
    />
  )
}
