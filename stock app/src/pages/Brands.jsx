import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import BrandModal from "../components/modals/BrandModal";
import useStockCall from "../hooks/useStockCall";
import { flex } from "../styles/globalStyle";

const Brands = () => {
  const { getStockData } = useStockCall();
  const { brands } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getStockData("brands");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error">
        Brands
      </Typography>
      <Button onClick={handleOpen} variant="contained">
        New Brand
      </Button>
      <BrandModal        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid container sx={flex}>
        {brands?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard
              firm={firm}
              setOpen={setOpen}
              info={info}
              setInfo={setInfo}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Brands;
