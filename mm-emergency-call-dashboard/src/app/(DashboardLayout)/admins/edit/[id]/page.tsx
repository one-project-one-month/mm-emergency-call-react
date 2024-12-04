"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
    Box,
    Button,
    Divider,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import React from "react";
import { editAdmin } from "@/lib/apps/admin/adminSlice";
import { Admin } from "@/types/admins";
import { useRouter, useParams } from "next/navigation";

export default function UpdatingAdmin() {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const router = useRouter();

    const adminId = Number(id);
    const admins = useAppSelector((state) => state.admin.admins);

    const adminToBeUpdated = admins.find((Admin: Admin) => Admin.id === adminId);

    const handleUpdateUser = (formData: FormData) => {
        const name = formData.get("name")?.toString().trim();
        const emailAddress = formData.get("email")?.toString().trim();

        if (!name || !emailAddress) {
            alert("All fields are required.");
            return;
        }

        const updatedAdmin: Admin = { id: adminToBeUpdated!.id, name, emailAddress };
        dispatch(editAdmin(updatedAdmin));
        router.push("/admins");
    };

    if (!adminToBeUpdated) {
        return <Typography variant="h6">Admin not found.</Typography>;
    }

    return (
        <Box
            component="form"
            onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                handleUpdateUser(formData);
            }}
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
                <Typography variant="h5">Edit Admin Form</Typography>
            </Box>
            <Divider sx={{ mb: "15px" }} />

            {/* Name */}
            <Box sx={{ width: "100%", mb: 4 }}>
                <Typography variant="h6">Name</Typography>
                <Box sx={{ display: "flex", mt: 1 }}>
                    <TextField
                        sx={{ flex: 1, maxWidth: "50px" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonOutlineIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        name="name"
                        defaultValue={adminToBeUpdated.name}
                        sx={{ flex: 4 }}
                    />
                </Box>
            </Box>

            {/* Email */}
            <Box sx={{ width: "100%", mb: 4 }}>
                <Typography variant="h6">Email</Typography>
                <Box sx={{ display: "flex", mt: 1 }}>
                    <TextField
                        sx={{ flex: 1, maxWidth: "50px" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailOutlineIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        name="email"
                        defaultValue={adminToBeUpdated.emailAddress}
                        sx={{ flex: 4 }}
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
                    Update Admin
                </Button>
                <Button
                    type="button"
                    onClick={() => router.push("/admins")}
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
            </Box>
        </Box>
    );
}
