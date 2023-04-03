import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import SalesModal from "../components/modals/SalesModal";
import useStockCall from "../hooks/useStockCall";

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { btnStyle } from "../styles/globalStyle";
import EditIcon from "@mui/icons-material/Edit"
const Sales = () => {
  const { getStockData, deleteStockData , getProCatBrand } = useStockCall();
  const { sales } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const columns = [
    {
      field: "createds",
      headerName: "Date",
      minWidth: 110,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "brand",
      headerName: "Brand",
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      headerAlign: "center",
      align: "center",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "product",
      headerName: "Product",
      type: "text",
      headerAlign: "center",
      align: "center",
      minWidth: 70,
      flex: 1,
    },

    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
      flex: 0.7,
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
      renderCell: ({ id, row: { brand_id, product_id, quantity, price } }) => {
        return [
        <GridActionsCellItem
        key={"edit"}
        icon={<EditIcon/>}
        label={"edit"}
        onClick={() => {
          setOpen(true)
          setInfo({ id, brand_id, product_id, quantity, price })
        }}  sx={{btnStyle}}
        /> , 
       
        <GridActionsCellItem
        key={"delete"}
        icon={<DeleteForeverIcon />}
        onClick={() => deleteStockData("sales", id)}
        sx={btnStyle}
        label="delete"
        />,

      ]
     
      },
    },
  ];
  useEffect(() => {
getProCatBrand()
getStockData("sales")
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Sales
      </Typography>

      <Button variant="contained" onClick={handleOpen}>
        New Sale
      </Button>

      <SalesModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <Box sx={{ width: "100%", marginTop: "1rem" }}>
        <DataGrid
          autoHeight
          rows={sales}
          columns={columns}
          pageSize={10} 
          slots={{ toolbar: GridToolbar }}
          sx={{boxShadow:4}}
        />
      </Box>
    </div>
  );
};

export default Sales;
