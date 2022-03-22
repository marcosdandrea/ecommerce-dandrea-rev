import Box from '@mui/material/Box';
import { Link } from "react-router-dom"
import "./style.css"

export default function BrandLogo() {
    const brandLogo = "https://www.gobsn.com/_ui/v10637de63514/responsive/common/images/bsn-logo-white.svg"
    return (
        <Link to={"/"}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <img src={brandLogo} className="brandStyle" alt="Boring Company Logo" />
            </Box>
        </Link>
    )
}