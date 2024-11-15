'use client'
import { Box, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function SelectedCountAndBinIcon() {
  const selectedUserCount = useSelector((state: RootState) => state.user.selectedUsers)
  return (
    <Box
      sx={{
        opacity: selectedUserCount.length ? 1 : 0,
        zIndex: selectedUserCount.length ? 1 : -1,
        position: "absolute",
        top: 0,
        left: 0,
        padding: 2.5,
        mb: 2,
        width: "100%",
        borderRadius: "7px 7px 0 0",
        bgcolor: "#EBF0FF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">
        {selectedUserCount.length} selected
      </Typography>
      {selectedUserCount.length > 0 && (
        <DeleteOutlineOutlinedIcon sx={{ cursor: "pointer" }} />
      )}
    </Box>
  );
}
