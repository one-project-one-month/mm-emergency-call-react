'use client'
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import UserTableRow from "./UserTableRow";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { selectAllUser } from "@/lib/apps/user/userSlice";
const UserTable: React.FC = () => {
  const users = useSelector((state: RootState) => state.user.users)
  const isAllSelected = useSelector((state: RootState) => state.user.isAllSelected)
  const dispatch = useDispatch()

  const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(selectAllUser(event.target.checked));
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        /*         mt: selectedUsers.length ? 7 : 0,
         */ borderTop: "1px solid rgba(224, 224, 224, 1)",
        "& .MuiTableCell-root": {
          fontSize: "14px", // chang fontsize of all rows
        },
        "& thead .MuiTableCell-root": {
          fontSize: "13.5px", // change fontsize of header
          fontWeight: "bold", // change fontweight
        },
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "2%" }}>
              {" "}
              <Checkbox checked={isAllSelected} onChange={handleSelectAllChange} />
            </TableCell>
            <TableCell sx={{ width: "20%" }}>Name</TableCell>
            <TableCell align="left" sx={{ width: "25%" }}>
              Email Adress
            </TableCell>
            <TableCell align="left" sx={{ width: "25%" }}>
              Adress
            </TableCell>
            <TableCell align="left" sx={{ width: "20%" }}>
              Role
            </TableCell>
            <TableCell align="left" sx={{ width: "8%" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <UserTableRow
              key={user.id}
              user={user}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default React.memo(UserTable);
