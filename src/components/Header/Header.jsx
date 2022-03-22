import Navbar from "../Navbar/Navbar.jsx"

export default function Header(props){

    return (
        <Navbar 
        itemsInCart={props.itemsInCart}/>
    )
}
