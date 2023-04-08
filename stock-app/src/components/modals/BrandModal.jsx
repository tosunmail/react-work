import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../styles/globalStyle";
import { TextField } from "@mui/material";

import useStockCall from "../../hooks/useStockCall";

export default function FirmModal({ open, handleClose, info , setInfo  }) {
 
  const { postStockData, putStockData } = useStockCall()

  const handleChange = (e) => {
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (info.id) {
      putStockData("brands", info)
    } else {
      postStockData("brands", info)
    }

    handleClose()
    setInfo({ name: "", phone: "", address: "", image: "" })
  }



  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose()
          setInfo({ name: "", phone: "", address: "", image: "" })
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }} component="form" onSubmit={handleSubmit}>
          <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              required
              value={info?.name}
              onChange={handleChange}
            />
           
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info?.image}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained">
              Submit Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
