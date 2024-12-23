"use client";

import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const BlueButton = styled(Button)({
  backgroundColor: "#1976D2", 
  color: "white",
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#115293",
  },
});

const ConfirmButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <BlueButton variant="contained" onClick={onClick}>
      <Typography>Sure</Typography>
    </BlueButton>
  );
};

export default ConfirmButton;
