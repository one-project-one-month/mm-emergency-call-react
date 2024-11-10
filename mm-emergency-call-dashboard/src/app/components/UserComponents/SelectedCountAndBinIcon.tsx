"use client";

import { Box, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { UserType } from "@/app/(DashboardLayout)/users/page";

interface Props {
  selectedUsers: {
    id: number;
    name: string;
    emailAdress: string;
    adress: string;
    role: UserType;
  }[];
}
export default function SelectedCountAndBinIcon({ selectedUsers }: Props) {
  return (
    <Box
      sx={{
        opacity: selectedUsers.length ? 1 : 0,
        zIndex: selectedUsers.length ? 1 : -1,
        position: "absolute",
        top: 0,
        left: 0,
        padding: 2.5,
        mb: 2,
        width: "100%",
        borderRadius: "7px 7px 0px 0px",
        bgcolor: "#EBF0FF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography>{selectedUsers.length}selected</Typography>{" "}
      <DeleteOutlineOutlinedIcon />{" "}
    </Box>
  );
}
