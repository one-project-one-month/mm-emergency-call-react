"use client";

import React, { useState } from "react";
import {
  TableRow,
  TableCell,
  Checkbox,
  Box,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UserRoleBadge from "./UserRoleBadge";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import {
  removeUser,
  setIsAllSelected,
  toggleSelectUser,
} from "@/lib/apps/user/userSlice";
import { User } from "@/types/users";
import MoreVertBox from "./MoreVertBox";
import WarningBox from "./WarningBox";

interface UserTableRowProps {
  user: User;
  index: number;
}

const UserTableRow: React.FC<UserTableRowProps> = ({ user, index }) => {
  const [showMoreVertBox, setShowMoreVertBox] = useState<boolean>(false);
  const [showWarningBox, setShowWarningBox] = useState<boolean>(false);

  const dispatch = useDispatch();

  const isAllSelected = useSelector(
    (state: RootState) => state.user.isAllSelected
  );
  const selectedUsers = useSelector(
    (state: RootState) => state.user.selectedUsers
  );
  const isSelected = selectedUsers.some(
    (selectedUser) => selectedUser.id === user.id
  );

  const handleCheckboxChange = () => {
    dispatch(toggleSelectUser(user));
    dispatch(setIsAllSelected());
  };

  const handleDeleteUser = () => {
    dispatch(removeUser(user.id));
  };

  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        bgcolor: "white",
      }}
    >
      <TableCell>
        <Checkbox
          checked={isAllSelected || isSelected}
          onChange={handleCheckboxChange}
        />
      </TableCell>
      <TableCell>{index}.</TableCell>
      <TableCell component="th" scope="row">
        {user.name}
      </TableCell>
      <TableCell align="left">{user.emailAddress}</TableCell>
      <TableCell align="left">{user.address}</TableCell>
      <TableCell>
        <UserRoleBadge role={user.role} />
      </TableCell>
      <TableCell>
        <Box
          id={`${user.id}`}
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          <MoreVertBox
            user={user}
            showMoreVertBox={showMoreVertBox}
            setShowMoreVertBox={setShowMoreVertBox}
            setShowWarningBox={setShowWarningBox}
          />

          <IconButton
            onClick={() => setShowMoreVertBox(!showMoreVertBox)}
          >
            <MoreVertIcon fontSize="large" />
          </IconButton>
        </Box>
      </TableCell>
      
      {showWarningBox && (
        <WarningBox
          showWarningBox={showWarningBox}
          setShowWarningBox={setShowWarningBox}
          onConfirm={handleDeleteUser}
          title="Are you sure you want to delete this user?"
          description="This action will permanently delete this user."
        />
      )}
    </TableRow>
  );
};

export default React.memo(UserTableRow);
