import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFetch } from '../../data/Database'
import { Typography, Button, Stack } from '@mui/material'
import CachedIcon from '@mui/icons-material/Cached';
import './itemDetailContainer.css'

export default function ItemDetailContainer( { onAdd }) {

  const { productId } = useParams();
  const [CurrentItem, setCurrentItem] = useState([]);

  useEffect(() => {

    getFetch
      .then((res) => {
        setCurrentItem(res.find(item => parseInt(item.id) === parseInt(productId)))
      })

    return () => {
    }

  }, [productId])

  if (CurrentItem.length === 0) {
    return (<div className="loadingStyle"><Typography><strong>Loading </strong> </Typography><CachedIcon className="loadingIcon" /></div>)
  } else {
    return (
      <Stack className="itemDetailContainer">
        <ItemDetail
          itemData={CurrentItem}
          onAdd={onAdd}
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
