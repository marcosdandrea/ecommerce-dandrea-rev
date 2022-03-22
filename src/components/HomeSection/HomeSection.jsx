import { Box, Stack } from '@mui/material';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
const shopItems = ["item 1", "item 2", "item 3", "item 4", "item 5"];

export default function HomeSection(props) {



    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                overflow: 'hidden'
            }}
        >
            <Stack
                direction="column">                
                <div>Home section</div>
            </Stack>
        </Box>
    )
}