"use client";

import { Box, IconButton, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { RootState } from "@/lib/store";
import { removeAdmin, resetSelectAdmins } from "@/lib/apps/admin/adminSlice";
import { removeUser } from "@/lib/apps/user/userSlice";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";

export default function SelectedCountAndBinIcon() {
  const dispatch = useAppDispatch();

  const selectedAdmins = useAppSelector(
    (state: RootState) => state.admin.selectedAdmins
  );

  const selectedUsers = useAppSelector(
    (state: RootState) => state.user.selectedUsers
  );

  const handleDeleteAdmins = () => {
    selectedAdmins.forEach((admin) => {
      dispatch(removeAdmin(admin.id));
    });
    dispatch(resetSelectAdmins());
  };

  const handleDeleteUsers = () => {
    selectedUsers.forEach((user) => {
      dispatch(removeUser(user.id));
    });
  };

  return (
    <Box
      sx={{
        opacity: selectedAdmins.length || selectedUsers.length ? 1 : 0,
        zIndex: selectedAdmins.length || selectedUsers.length ? 1 : -1,
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
      {selectedAdmins.length > 0 && (
        <Typography variant="body1">
          {selectedAdmins.length} admin(s) selected
        </Typography>
      )}

      {selectedUsers.length > 0 && (
        <Typography variant="body1">
          {selectedUsers.length} user(s) selected
        </Typography>
      )}

      {selectedAdmins.length > 0 && (
        <IconButton onClick={handleDeleteAdmins}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      )}

      {selectedUsers.length > 0 && (
        <IconButton onClick={handleDeleteUsers}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      )}
    </Box>
  );
}
