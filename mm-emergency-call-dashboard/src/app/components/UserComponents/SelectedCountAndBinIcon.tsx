"use client";

import { Box, IconButton, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { RootState } from "@/lib/store";
/* import { removeAdmin, resetSelectAdmins } from "@/lib/apps/admin/adminSlice";
 */ import { removeUser } from "@/lib/apps/user/userSlice";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import WarningBox from "./WarningBox";
import { useEffect, useState } from "react";

export default function SelectedCountAndBinIcon() {
  const dispatch = useAppDispatch();
  const [showWarningBox, setShowWarningBox] = useState<boolean>(false);

  /* const selectedAdmins = useAppSelector(
    (state: RootState) => state.admin.selectedAdmins
  ); */

  const selectedUsers = useAppSelector(
    (state: RootState) => state.user.selectedUsers
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const warningBox = document.getElementById(`warningBox`);
      const binIconBox = document.getElementById("BinIcon");

      if (
        warningBox &&
        binIconBox &&
        !warningBox.contains(event.target as Node) &&
        !binIconBox.contains(event.target as Node)
      ) {
        setShowWarningBox(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  /*  const handleDeleteAdmins = () => {
    selectedAdmins.forEach((admin) => {
      dispatch(removeAdmin(admin.id));
    });
    dispatch(resetSelectAdmins());
  }; */

  const handleDeleteUsers = () => {
    selectedUsers.forEach((user) => {
      dispatch(removeUser(user.id));
    });
  };

  return (
    <Box
      sx={{
        opacity: /* selectedAdmins.length || */ selectedUsers.length ? 1 : 0,
        zIndex: /* selectedAdmins.length ||  */ selectedUsers.length ? 1 : -1,
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
      {/*  {selectedAdmins.length > 0 && (
        <Typography variant="body1">
          {selectedAdmins.length} admin(s) selected
        </Typography>
      )} */}

      {selectedUsers.length > 0 && (
        <Typography variant="body1">
          {selectedUsers.length} user(s) selected
        </Typography>
      )}

      {/*  {selectedAdmins.length > 0 && (
        <IconButton onClick={handleDeleteAdmins}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      )} */}

      {selectedUsers.length > 0 && (
        <IconButton
          id="BinIcon"
          onClick={() => {
            setShowWarningBox(!showWarningBox);
          }}
        >
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      )}

      <WarningBox
        showWarningBox={showWarningBox}
        setShowWarningBox={setShowWarningBox}
        users={selectedUsers}
        handleDeleteUser={handleDeleteUsers}
      />
    </Box>
  );
}

/*  const handleDeleteUser = () => {
    selectedUserCount.forEach((user) => {
      dispatch(removeUser(user.id));
    });
  };

  return (
    <Box
      sx={{
        opacity: selectedAdmins.length || selectedUserCount.length ? 1 : 0,
        zIndex: selectedAdmins.length || selectedUserCount.length ? 1 : -1,
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
        {selectedAdmins.length} admin(s) selected
      </Typography>
      {selectedAdmins.length > 0 && (
        <IconButton onClick={handleDeleteAdmins}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      )}

      <Typography variant="body1">
        {selectedUserCount.length} user(s) selected
      </Typography>
      {selectedUserCount.length > 0 && (
        <IconButton onClick={handleDeleteUser}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      )}
    </Box>
  );
}
 */
