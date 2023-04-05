import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardBlog({ item }) {
  const [date, setDate] = React.useState(item.publish_date);

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card sx={{ boxShadow: 24, mt: 10 , maxWidth:"400px", maxHeight:"550px", minHeight:"550px"}}>
      <CardMedia
        component="img"
        height="250px"
        image={item.image}
        style={{ objectFit: 'contain' , padding:"5px"  }}
      /> 
      <CardContent sx={{height:"230px"}}>
        <Typography
          sx={{ color: "green" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item?.content}
        </Typography>
        <Typography
          sx={{ mt: 3, fontWeight: "bold" }}
          variant="body2"
          color="text.secondary"
        >
          {formattedDate}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"space-between"}}>
        <Button size="small">Share</Button>
        <div>
        <Button  variant="contained">
        Read More
      </Button>

        </div>
      </CardActions>
    </Card>
  );
}
