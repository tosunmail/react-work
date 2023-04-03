import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PurchasesModal from "../components/modals/PurchasesModal";
import useStockCall from "../hooks/useStockCall";

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { btnStyle } from "../styles/globalStyle";
import EditIcon from "@mui/icons-material/Edit"
const Purchases = () => {
  const { getStockData, deleteStockData , getProCatBrand } = useStockCall();
  const { purchases } = useSelector((state) => state.stock);
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
    getProCatBrand()
    getStockData("firms")
      }, []);

  const columns = [
     {
      field: "createds",
      headerName: "Date",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "firm",
      headerName: "Firm",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "brand",
      headerName: "Brand",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "product",
      headerName: "Product",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price_total",
      headerName: "Amount",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "operation",
      headerName: "Operation",
      headerAlign: "center",
      align: "center",
      minWidth: 50,
      flex: 1,
      renderCell: ({ id, row: { brand_id, product_id, quantity, price , firm_id } }) => {
        return [
        <GridActionsCellItem
        key={"edit"}
        icon={<EditIcon/>}
        label={"edit"}
        onClick={() => {
          setOpen(true)
          setInfo({ id, brand_id, firm_id , product_id, quantity, price })
        }}  sx={{btnStyle}}
        /> , 
       
        <GridActionsCellItem
        key={"delete"}
        icon={<DeleteForeverIcon />}
        onClick={() => deleteStockData("purchases", id)}
        sx={btnStyle}
        label="delete"
        />,

      ]
     
      },
    },
  ];


  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Sales
      </Typography>

      <Button variant="contained" onClick={handleOpen}>
        New Purchase
      </Button>

      <PurchasesModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <Box sx={{ width: "100%", marginTop: "1rem" }}>
        <DataGrid
          autoHeight
          rows={purchases}
          columns={columns}
          pageSize={10} 
          slots={{ toolbar: GridToolbar }}
          sx={{boxShadow:4}}
        />
      </Box>
    </div>
  );
};

export default Purchases;
