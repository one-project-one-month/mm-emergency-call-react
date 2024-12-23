"use client";
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";
import UserTableRow from "./UserTableRow";
import { RootState } from "@/lib/store";
import { selectAllUser } from "@/lib/apps/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

interface Column {
  label: string;
  width: string;
  align?: "left" | "right" | "center" | "inherit" | "justify";
}

const columns: Column[] = [
  { label: "", width: "1%" },
  { label: "No", width: "1%" },
  { label: "Name", width: "20%" },
  { label: "Email Address", width: "25%", align: "left" },
  { label: "Address", width: "25%", align: "left" },
  { label: "Role", width: "20%", align: "left" },
  { label: "Action", width: "8%", align: "left" },
];

const UserTable: React.FC = () => {
  const users = useAppSelector((state: RootState) => state.user.users);
  const isAllSelected = useAppSelector(
    (state: RootState) => state.user.isAllSelected
  );
  const dispatch = useAppDispatch();

  const handleSelectAllChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const usersToBeSelected = event.target.checked ? users : [];
    dispatch(selectAllUser(usersToBeSelected));
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderTop: "1px solid rgba(224, 224, 224, 1)",
        "& .MuiTableCell-root": { fontSize: "14px" },
        "& thead .MuiTableCell-root": {
          fontSize: "13.5px",
          fontWeight: "bold",
        },
      }}
    >
      <Table aria-label="user table">
        <TableHead>
          <TableRow>
            {columns.map((col, idx) =>
              idx === 0 ? (
                <TableCell key={idx} sx={{ width: col.width }}>
                  <Checkbox
                    checked={isAllSelected}
                    onChange={handleSelectAllChange}
                  />
                </TableCell>
              ) : (
                <TableCell
                  key={idx}
                  align={col.align || "center"}
                  sx={{ width: col.width }}
                >
                  {col.label}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <UserTableRow key={user.id} user={user} index={index + 1} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(UserTable);
