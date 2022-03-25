import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartList from '../CartList/CartList'
import { CartContext } from '../contexts/CartContext'
import { Typography, Button } from '@mui/material'
import CartTotalPrice from '../CartTotalPrice/CartTotalPrice'
import UserFormContainer from '../UserFormContainer/UserFormContainer'
import { addDoc, getFirestore, collection, where, documentId, query, getDocs, writeBatch } from 'firebase/firestore'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import './cartListContainer.css'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CartListContainer() {
  const { itemsInCart, setItemsInCart } = useContext(CartContext)
  const [checkOutEnabled, setCheckOutEnabled] = useState(false)
  const [fullName, setFullName] = useState("")
  const [telephone, setTelephone] = useState("")
  const [email, setEmail] = useState("")
  const [open, setOpen] = useState(false)
  const [transactionStatus, setTransactionStatus] = useState([false, "", ""])

  function MoneyAmount() {
    let acumulator = 0;
    itemsInCart.forEach(item => {
      acumulator += (item.itemPrice * item.itemAmount)
    })
    return acumulator
  }

  const allowCheckOut = (value) => {
    switch (value.target.id) {
      case "name":
        setFullName(value.target.value)
        break;

      case "telephone":
        setTelephone(value.target.value)
        break;

      case "email":
        setEmail(value.target.value)
        break;

    }
  }

  useEffect(() => {
    if (fullName && validateEmail(email) && validatePhonenumber(telephone)) {
      setCheckOutEnabled(true)
    } else {
      setCheckOutEnabled(false)
    }
  }, [fullName, email, telephone])

  const validateEmail = (email) => {
    return (String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ));
  };

  const validatePhonenumber = (value) => {
    return (value.match(/\d/g).length === 10);
  };

  const checkOut = () => {
    setCheckOutEnabled(false)
    const date = new Date()
    const items = itemsInCart.map(item => ({ id: item.itemID, title: item.itemName, price: item.itemPrice, amount: item.itemAmount }))
    const total = MoneyAmount();
    const order = { buyer: { fullName, telephone, email }, item: items, date, total }
    publishToFirebase(order)
  }

  const publishToFirebase = (order) => {
    let orderID = 0
    const database = getFirestore()
    const queryCollection = collection(database, "orders")
    addDoc(queryCollection, order)
      .then(res => orderID = res.id)
      .catch(err => console.log(err))
      .finally(() => {
        updateStock(database, order, orderID)
      })
  }

  const updateStock = (database, order, orderID) => {
    const queryCollection = collection(database, "products")
    const orderItemsIDs = order.item.map(item => item.id)
    const queryUptdateStock = query(
      queryCollection,
      where(documentId(), "in", orderItemsIDs))

    const batch = writeBatch(database);
    getDocs(queryUptdateStock)
      .then(resp => resp.docs.forEach(res => {
        //console.log (order.item[0].id)
        //console.log (res.ref.id)
        //console.log (order.item.find(item => item.id === res.ref.id).amount)
        batch.update(res.ref, { stock: res.data().stock - order.item.find(item => item.id === res.ref.id).amount })
      }
      ))
      .finally(() => {
        batch.commit()
        .catch(err => {
          setTransactionStatus([false, orderID, "Ooops, an error occurred while creating the order! ("+ err.message +")"])
          setOpen(true);        
        })
        .then(() => {
          setTransactionStatus([true, orderID, "Order has been created! ID: "])
          setOpen(true);
          setTimeout(() => {
            setItemsInCart([])
          }, 1000);
          
        });

      })
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  if (itemsInCart.length == 0) {
    return (<div className="noItems">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity={transactionStatus[0] ? "success" : "error"} sx={{ width: '100%' }}>
            {transactionStatus[2] + transactionStatus[1]}
          </Alert>
        </Snackbar>
        < Typography> Aún no hay items en tu carrito de compras...</Typography>
        <Link to={"/shop"} className="btnBackToShop"><Button variant="contained" >Back to Products</Button></Link>
      </div>)
  } else {
    return (
      <div className="checkOutContainer">
        <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity={transactionStatus[0] ? "success" : "error"} sx={{ width: '100%' }}>
            {transactionStatus[2] + transactionStatus[1]}
          </Alert>
        </Snackbar>
        <div className="checkOut">
          <UserFormContainer allowCheckOut={allowCheckOut} />
          <div className="cartListContainer">
            <CartList itemsInCart={itemsInCart} />
          </div>
        </div>
        <CartTotalPrice totalPrice={MoneyAmount()} checkOutEnabled={checkOutEnabled} checkOut={checkOut} />
      </div>
    )
  }

}
