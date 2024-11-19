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
import Link from "next/link";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { UserType } from "@/types/users";
import { Admin } from "@/types/admins";
import { redirect } from "next/navigation";
import { addAdmin } from "@/lib/apps/admin/adminSlice";
import { useAppDispatch } from "@/lib/hooks";

const AddingAdmin = () => {
  const dispatch = useAppDispatch();
  const handleAddAdmin = (formData: FormData) => {
    const id = Math.floor(Math.random() * 10);
    const name = formData.get("name") as string;
    const emailAddress = formData.get("email") as string;

    const adminToBeAdded: Admin = { id, name, emailAddress };
    dispatch(addAdmin(adminToBeAdded));
    redirect("/admins");
  };
  return (
    <Box
      component="form"
      action={handleAddAdmin}
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
        <Typography variant="h5">Add Admin form</Typography>
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
            defaultValue=""
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
            name="email"
            defaultValue=""
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
          Add Admin
        </Button>
        <Link href={"/admins"}>
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

export default AddingAdmin;
