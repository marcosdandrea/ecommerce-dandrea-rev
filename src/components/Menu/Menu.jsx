import "./menu.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import StyledBadge from '../CartButton/badge'
import {NavLink} from 'react-router-dom'


const menuItems =
    [
        { itemName: "Home", Action: "/" },
        { itemName: "Products", Action: "shop" },
        { itemName: "Cart", Action: "cart" },
    ]

const buildMenu = (itemName) => {
    return (
        itemName.map((item) => {
            return (

                <NavLink to={item.Action} key={item.itemName} className="menuItem">
                <Typography variant="button" display="block" gutterBottom>
                        <strong>
                            {item.itemName}
                        </strong>
                    </Typography>    
                    
                </NavLink>

            )
        })
    )
}

export default function Menu({ itemsAmount }) {
    const Items = buildMenu(menuItems);
    return (

        <Box id="menu"
            width={{
                xs: "fit-content",
                sm: "fit-content",
                md: "100%"
            }}
        >
            {/* Desktop */}
            <Box
                sx=
                {{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: "100%",
                }}
                display=
                {{
                    xs: "none",
                    sm: "none",
                    md: "flex"
                }}>

                <div className="menu">
                    {Items}
                </div>
            </Box>

            {/* Mobile */}

            <Box
                sx=
                {{
                    position: "absolute",
                    width: "fit - content",
                    right: 0,
                    marginRight: "1em",
                }}
                display=
                {{
                    xs: "flex",
                    sm: "flex",
                    md: "none"
                }}>


                <IconButton>
                    <StyledBadge badgeContent={itemsAmount} color="success">
                        <MenuIcon />
                    </StyledBadge>
                </IconButton>
            </Box>

        </Box>


    )
}