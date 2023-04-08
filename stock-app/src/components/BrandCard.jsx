import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { btnStyle, flex } from "../styles/globalStyle";
import useStockCall from "../hooks/useStockCall";

export default function brandsCard({ brands, setOpen, setInfo }) {
  const { deleteStockData } = useStockCall();

  return (
    <Card
      sx={{
        p: 2,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      elevetation={10}
    >
      <CardContent className="card">
        <Typography gutterBottom variant="h5" component="div">
          {brands?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {brands?.address}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ p: 1, objectFit: "contain", height: "130px" }}
        image={brands?.image}
        title="brands-image"
      />
      <Typography>{brands?.phone}</Typography>
      <CardActions sx={flex}>
        <EditIcon
          sx={btnStyle}
          onClick={() => {
            setOpen(true);
            setInfo(brands);
          }}
        />
        <DeleteOutlineIcon
          onClick={() => deleteStockData("brands", brands.id)}
          sx={btnStyle}
        />
      </CardActions>
    </Card>
  );
}
