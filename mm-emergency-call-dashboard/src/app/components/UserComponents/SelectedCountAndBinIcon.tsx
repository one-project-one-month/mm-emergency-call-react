"use client";

import { Box, IconButton, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { RootState } from "@/lib/store";
import { removeUser } from "@/lib/apps/user/userSlice";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import WarningBox from "./WarningBox";
import { useState } from "react";

export default function SelectedCountAndBinIcon() {
  const dispatch = useAppDispatch();
  const [showWarningBox, setShowWarningBox] = useState<boolean>(false);

  const selectedUsers = useAppSelector(
    (state: RootState) => state.user.selectedUsers
  );

  const handleDeleteUsers = () => {
    selectedUsers.forEach((user) => {
      dispatch(removeUser(user.id));
    });
  };

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
        borderRadius: "7px 7px 0 0",
        bgcolor: "#EBF0FF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {selectedUsers.length > 0 && (
        <>
          <Typography variant="body1">
            {selectedUsers.length} user(s) selected
          </Typography>
          <Box sx={{ position: "relative" }}>
            <IconButton
              id="BinIcon"
              onClick={() => setShowWarningBox(!showWarningBox)}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
            {showWarningBox && (
              <WarningBox
                showWarningBox={showWarningBox}
                setShowWarningBox={setShowWarningBox}
                onConfirm={handleDeleteUsers}
                title={
                  selectedUsers.length > 1
                    ? "Delete Selected Users?"
                    : "Delete Selected User?"
                }
                description={
                  selectedUsers.length > 1
                    ? "This action will permanently delete the selected users."
                    : "This action will permanently delete the selected user."
                }
              />
            )}
          </Box>
        </>
      )}
    </Box>
  );
}
