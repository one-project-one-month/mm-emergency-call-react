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
  const handleDeleteClick = () => {
    setShowWarningBox(true);
    setShowMoreVertBox(false);
  };

  const ActionBox: React.FC<{
    onClick?: () => void;
    href?: string;
    label: string;
    icon: React.ReactNode;
    color?: string;
  }> = ({ onClick, href, label, icon, color }) => (
    <Box
      component={href ? Link : "button"}
      href={href}
      onClick={onClick}
      sx={{
        padding: 0.5,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: color || "inherit",
        textDecoration: "none",
        backgroundColor: "inherit",
        border: "none",
        cursor: "pointer",
        ":hover": {
          bgcolor: "#F5F7F8",
          borderRadius: "2px",
        },
      }}
    >
      <Typography sx={{padding: 1}}>{label}</Typography>
      {icon}
    </Box>
  );

  return (
    <Box sx={{ position: "relative" }}>
      {showMoreVertBox && (
        <Box
          sx={{
            zIndex: 10,
            position: "absolute",
            top: 0,
            right: 0,
            // padding: 0.7,
            bgcolor: "white",
            width: "150px",
            height: "100px",
            border: "1px solid lightgray",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Edit Action */}
          <ActionBox
            href={`/users/edit/${user.id}`}
            label="Edit"
            icon={<EditIcon />}
            color="blue"
          />

          {/* Delete Action */}
          <ActionBox
            onClick={handleDeleteClick}
            label="Delete"
            icon={<DeleteIcon />}
            color="#E63946"
          />
        </Box>
      )}
    </Box>
  );
}
