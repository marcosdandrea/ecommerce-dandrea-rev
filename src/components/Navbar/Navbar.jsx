import CartButton from "../CartButton/CartButton";
import Box from '@mui/material/Box';
import BrandLogo from '../brand/brand'
import Menu from '../Menu/Menu'

export default function Navbar (){
    return(

    <Box 
      sx={{
        width: "100vw",
        height: "3em",
        backgroundColor: '#202020',
        padding: "0.5em",
        display: "flex", 
        userSelect: "none", 
      }}
      justifyContent = {{
        xs: "center",
        sm:"center",
        md:"space-between"        
      }}>   

      <BrandLogo/>
      <Menu/>
      <CartButton />

    </Box> 

    )
}

 