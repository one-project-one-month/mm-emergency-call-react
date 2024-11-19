"use client";
import { Box, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { removeAdmin, resetSelectAdmins } from "@/lib/apps/admin/adminSlice";
import { useAppDispatch } from "@/lib/hooks";

export default function SelectedCountAndBinIcon() {
  const dispatch = useAppDispatch();

  const selectedAdmins = useSelector(
    (state: RootState) => state.admin.selectedAdmins
  );

  // Handle deleting selected admins
  const handleDeleteAdmins = () => {
    // Dispatch the removeAdmin action for each selected admin
    selectedAdmins.forEach((admin) => {
      dispatch(removeAdmin(admin.id));
    });
    // Reset the selectedAdmins array
    dispatch(resetSelectAdmins());
  };
  return (
    <Box
      sx={{
        opacity: selectedAdmins.length ? 1 : 0,
        zIndex: selectedAdmins.length ? 1 : -1,
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
      <Typography variant="body1">{selectedAdmins.length} selected</Typography>
      {selectedAdmins.length > 0 && (
        <DeleteOutlineOutlinedIcon
          onClick={handleDeleteAdmins}
          sx={{ cursor: "pointer" }}
        />
      )}
    </Box>
  );
}
