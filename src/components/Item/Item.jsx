import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemAmountSelector from '../ItemAmountSelector/ItemAmountSelector';
import { CardActionArea, Stack } from '@mui/material';
import "./item.css"

export default function Item(props) {
  let pesosArgentinos = Intl.NumberFormat('es-AR');

  const onAdd = (selectedAmount) => {
    props.onAdd(
      {
        "itemID": props.id,
        "itemName": props.title,
        "itemAmount": selectedAmount,
        "itemPrice": props.price,
        "itemImg": props.image,
        "itemCat": props.category
      }
    )
  }
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <Typography
          className={props.stock === 0 ? "noStock" : "stockAvailable"}
        >SIN STOCK</Typography>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.altImg}
        />
        <CardContent>

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >{props.title}</Typography>

            <Typography
              className="itemPrice"
            >${pesosArgentinos.format(props.price)}</Typography>
          </Stack>

          <Typography
            variant="body2"
            color="text.secondary"
            className="category"
          >{props.category}</Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            className="paragraph"
          >{props.paragraph}</Typography>



        </CardContent>

      </CardActionArea>
    </Card>
  )
}
