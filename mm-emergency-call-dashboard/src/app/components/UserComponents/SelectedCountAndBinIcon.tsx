"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { RootState } from "@/lib/store";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { removeUser } from "@/lib/apps/user/userSlice";

export default function SelectedCountAndBinIcon() {
  const dispatch = useAppDispatch();
  const selectedUserCount = useAppSelector(
    (state: RootState) => state.user.selectedUsers
  );

  const handleDeleteUser = () => {
    selectedUserCount.map((user) => dispatch(removeUser(user.id)));
  };
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
        <IconButton onClick={handleDeleteUser}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      )}
    </Box>
  );
}
