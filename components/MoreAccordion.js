"use client";

import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MoreAccordion = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        sx={{
          background: "#f8f9fa",
          color: "#000",
          fontWeight: "bold",
          padding: "8px 16px",
          borderRadius: "8px",
          cursor: "pointer",
          textTransform: "none",
        }}
      >
        More
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>Hire from Lejhro</MenuItem>
        <MenuItem onClick={handleClose}>Resources</MenuItem>
        <MenuItem onClick={handleClose}>Blogs</MenuItem>
        <MenuItem onClick={handleClose}>Tutorials</MenuItem>
      </Menu>
    </>
  );
};

export default MoreAccordion;
