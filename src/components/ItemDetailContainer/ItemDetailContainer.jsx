import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Typography, Button, Stack } from '@mui/material'
import CachedIcon from '@mui/icons-material/Cached';
import './itemDetailContainer.css'
import { doc, getDoc } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'

export default function ItemDetailContainer() {

  const { productId } = useParams();
  const [CurrentItem, setCurrentItem] = useState([]);

  useEffect(() => {
    const database = getFirestore();
    const queryDb = doc(database, "products", productId);
    getDoc(queryDb)
        .then(resp => {
          setCurrentItem ({itemID: productId, ...resp.data()});
        })        
}, [])

  if (CurrentItem.length === 0) {
    return (<div className="loadingStyle"><Typography><strong>Loading </strong> </Typography><CachedIcon className="loadingIcon" /></div>)
  } else {
    return (
      <Stack className="itemDetailContainer">
        <ItemDetail
          itemData={CurrentItem}
        />
        <Link to={"/shop"} className="backBtn">
          <Button
            variant="contained"
          >Back</Button>
        </Link>
      </Stack>
    )
  }

}
