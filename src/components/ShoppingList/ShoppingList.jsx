import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function parseShopItems(shopItems) {
  return shopItems.map((item, index) =>{
    return (<li key={index}>{item}</li>)
  })
}

export default function ShoppingList({shopItems}) {
  const shopItemsToRender = parseShopItems(shopItems);
  return (
    <Card sx={{ minWidth: 275, maxWidth: "50%"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          This is your shopping list
        </Typography>
        <Typography variant="overline" component="div">
          <ul>
            {shopItemsToRender}
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}