"use client";

import {
  Box,
  Button,
  Divider,
  FormControl,
  InputAdornment,
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
import React from "react";
import Link from "next/link";
import { User, UserType } from "@/types/users";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { editUser } from "@/lib/apps/user/userSlice";
import { redirect } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}
export default function UpdatingUser({ params }: Props) {
  const dispatch = useAppDispatch();
  const id = Number(params.id);
  const users = useAppSelector((state) => state.user.users);
  // create fake userToBeUpdated
  const userToBeUpdated = users.find((user) => user.id === id);

  const [role, setRole] = React.useState(userToBeUpdated?.role);
  const roles = [
    { id: 1, name: UserType.SERVICE_PROVIDER },
    { id: 2, name: UserType.NORMAL_USER },
  ];

  const handleChangeRole = (event: SelectChangeEvent) => {
    setRole(event.target.value as UserType);
  };

  const handleUpdateUser = (formData: FormData) => {
    const id = userToBeUpdated?.id as number;
    const name = formData.get("name") as string;
    const emailAddress = formData.get("email") as string;
    const address = formData.get("address") as string;
    const role = formData.get("role") as UserType;

    const updatedUser: User = { id, name, emailAddress, address, role };

    dispatch(editUser(updatedUser));

    redirect("/users");
  };

  if (!userToBeUpdated) return null;
  return (
    <Box
      component="form"
      action={handleUpdateUser}
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
        <Typography variant="h5">Edit User Form</Typography>
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
            name="name"
            defaultValue={userToBeUpdated.name}
            placeholder={userToBeUpdated.name}
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
            name="email"
            defaultValue={userToBeUpdated.emailAddress}
            placeholder={userToBeUpdated.emailAddress}
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
            name="address"
            defaultValue={userToBeUpdated.address}
            placeholder={userToBeUpdated.address}
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
              name="role"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={role}
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
}
