"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputAdornment,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { UserType } from "../page";

const AddingUser = () => {
  const [role, setRole] = useState({});
  const roles = [
    { id: 1, name: UserType.SERVICE_PROVIDER },
    { id: 2, name: UserType.NORMAL_USER },
  ];
  const handleChangeRole = (event: SelectChangeEvent) => {
    setRole(event.target.value as UserType);
  };
  return (
    <Box
      sx={{
        mt: 7,
        width: "100%",
        border: "1px solid lightgray",
        padding: "30px",
        pt: 0,
        borderRadius: "7px",
      }}
    >
      <Box sx={{ py: "15px", display: "flex", alignItems: "center" }}>
        <Typography variant="h5">Add User form</Typography>
      </Box>
      <Divider
        sx={{
          width: "calc(100% + 60px)",
          marginLeft: "-30px",
          marginRight: "-30px",
          mb: "15px",
        }}
      />
      {/* Name */}
      <Box sx={{ width: "100%" }}>
        <Typography variant="h6">Name</Typography>

        <Box sx={{ width: "100%", mt: 1, mb: 4, display: "flex" }}>
          <TextField
            sx={{
              width: "5%",
              borderRight: "none",
              "& .MuiOutlinedInput-root": {
                borderRight: "none",
                borderRadius: "4px 0 0 4px", // Only round the left corners
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            placeholder={"Enter the name"}
            sx={{
              width: "95%",
              "& .MuiOutlinedInput-root": {
                borderLeft: "none",
                borderRadius: "0 4px 4px 0", // Only round the right corners
              },
            }}
          />
        </Box>
      </Box>

      {/* Email */}
      <Box sx={{ width: "100%" }}>
        <Typography variant="h6">Email</Typography>

        <Box sx={{ width: "100%", mt: 1, mb: 4, display: "flex" }}>
          <TextField
            sx={{
              width: "5%",
              borderRight: "none",
              "& .MuiOutlinedInput-root": {
                borderRight: "none",
                borderRadius: "4px 0 0 4px", // Only round the left corners
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            placeholder={"Enter the email"}
            sx={{
              width: "95%",
              "& .MuiOutlinedInput-root": {
                borderLeft: "none",
                borderRadius: "0 4px 4px 0", // Only round the right corners
              },
            }}
          />
        </Box>
      </Box>

      {/* Address */}
      <Box sx={{ width: "100%" }}>
        <Typography variant="h6">Address</Typography>

        <Box sx={{ width: "100%", mt: 1, mb: 4, display: "flex" }}>
          <TextField
            sx={{
              width: "5%",
              borderRight: "none",
              "& .MuiOutlinedInput-root": {
                borderRight: "none",
                borderRadius: "4px 0 0 4px", // Only round the left corners
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnOutlinedIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            placeholder={"Enter the address"}
            sx={{
              width: "95%",
              "& .MuiOutlinedInput-root": {
                borderLeft: "none",
                borderRadius: "0 4px 4px 0", // Only round the right corners
              },
            }}
          />
        </Box>
      </Box>
      {/* Role */}

      <Box sx={{ minWidth: 120 }}>
        <Typography variant="h6">Role</Typography>

        <Box sx={{ display: "flex", mt: 1, mb: 4 }}>
          <TextField
            sx={{
              width: "5%",
              borderRight: "none",
              "& .MuiOutlinedInput-root": {
                borderRight: "none",
                borderRadius: "4px 0 0 4px", // Only round the left corners
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleOutlinedIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <FormControl
            fullWidth
            sx={{
              width: "95%",
              "& .MuiOutlinedInput-root": {
                borderLeft: "none",
                borderRadius: "0 4px 4px 0", // Only round the right corners
              },
            }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={roles[0].name}
              onChange={handleChangeRole}
            >
              {roles.map((role) => {
                return (
                  <MenuItem value={role.name} key={role.id}>
                    {role.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>
      {/* Buttons */}
      <Box sx={{ display: "flex" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "#5D87FF",
            color: "white",
            ":hover": { bgcolor: "#396efe" },
          }}
        >
          Update User
        </Button>
        <Link href={"/users"}>
          <Button
            type="button"
            variant="contained"
            sx={{
              ml: 2,
              bgcolor: "#F3704D",
              color: "white",
              ":hover": { bgcolor: "#db5029" },
            }}
          >
            Cancel
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default AddingUser;
