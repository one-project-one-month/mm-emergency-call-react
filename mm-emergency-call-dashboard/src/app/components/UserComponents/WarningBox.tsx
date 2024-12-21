"use client";

import { User } from "@/types/users";
import { Box, Button, Typography } from "@mui/material";

interface Props {
  showWarningBox: boolean;
  users: User[];
  setShowWarningBox: React.Dispatch<React.SetStateAction<boolean>>;
  handleDeleteUser: () => void;
}

export default function WarningBox({
  showWarningBox,
  users,
  setShowWarningBox,
  handleDeleteUser,
}: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        display: showWarningBox ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "rgba(0,0,0,0.5)",
      }}
    >
      {/* ဒီမှာ id တစ်ခုခု ထည့်စရာလိုသလားမသိ။ id ဆိုတော့ unique ဖြစ်အောင်  */}
      <Box
        id={`warningBox`}
        sx={{
          bgcolor: "lightgray",

          height: "100px",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-end",
        }}
      >
        <Typography variant="h6">
          {users.length > 1
            ? "Are you sure to delete these users?"
            : "Are you sure to delete this user?"}
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              setShowWarningBox(false);
            }}
          >
            {" "}
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ ml: 1 }}
            onClick={handleDeleteUser}
          >
            {" "}
            Sure
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
