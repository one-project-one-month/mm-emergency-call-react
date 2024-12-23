"use client";

import { User } from "@/types/users";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  user: User;
  showMoreVertBox: boolean;
  setShowMoreVertBox: React.Dispatch<React.SetStateAction<boolean>>;
  setShowWarningBox: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MoreVertBox({
  user,
  showMoreVertBox,
  setShowMoreVertBox,
  setShowWarningBox,
}: Props) {
  return (
    <Box sx={{ width: 0, height: 0, position: "relative" }}>
      {" "}
      <Box
        sx={{
          zIndex: 10,
          position: "absolute",
          top: 0,
          right: 0,
          padding: 0.7,
          bgcolor: "white",
          width: "100px",
          height: "80px",
          border: "1px solid lightgray",
          display: showMoreVertBox ? "flex" : "none",
          flexDirection: "column",
        }}
      >
        {/* Edit */}
        <Link href={`/users/edit/${user.id}`} style={{ height: `50%` }}>
          <Box
            sx={{
              color: "blue",
              padding: 0.7,
              width: "100%",
              height: `100%`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              ":hover": {
                bgcolor: "lightgray",
                borderRadius: "7px",
              },
            }}
          >
            <Typography>Edit</Typography>
            <EditIcon />
          </Box>{" "}
        </Link>

        {/* Delete */}
        <Box
          component="form"
          action={() => {
            setShowWarningBox(true);
            setShowMoreVertBox(false);
          }}
          sx={{
            width: "100%",
            height: `50%`,
          }}
        >
          <Box
            component="button"
            type="submit"
            sx={{
              padding: 0.7,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "inherit",
              color: "#E63946 ",
              border: "none",
              cursor: "pointer",
              ":hover": {
                bgcolor: "lightgray",
                borderRadius: "7px",
                color: "red",
              },
            }}
          >
            {" "}
            <Typography>Delete</Typography>
            <DeleteIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
