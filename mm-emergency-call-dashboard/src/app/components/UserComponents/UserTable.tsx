import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { User } from "@/app/(DashboardLayout)/users/page";
import Checkbox from "@mui/material/Checkbox";
import UserTableRow from "./UserTableRow";

interface UserTableProps {
  usersByRole: User[];
  usersToShow: User[];
  selectedUsers: User[];
  setSelectedUsers: React.Dispatch<React.SetStateAction<User[]>>;
}
const UserTable: React.FC<UserTableProps> = ({
  usersByRole,
  usersToShow,
  selectedUsers,
  setSelectedUsers,
}: UserTableProps) => {
  const isAllSelected = React.useMemo(
    () => selectedUsers.length === usersByRole.length,
    [selectedUsers, usersByRole]
  );

  const handleSelectAll = () => {
    setSelectedUsers(isAllSelected ? [] : usersByRole)
  }

  const handleSelectUser = React.useCallback(
    (user: User) => {
      setSelectedUsers((prevSelected) =>
        prevSelected.includes(user) ? prevSelected.filter((u) => u.id !== user.id) : [...prevSelected, user]
      )
    },
    [setSelectedUsers]
  )

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
              <Checkbox
                checked={isAllSelected}
                onChange={handleSelectAll}
              />
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
           {usersToShow.map((user) => (
            <UserTableRow 
              key={user.id}
              user={user}
              isSelected={selectedUsers.includes(user)}
              onSelect={handleSelectUser}
            />
           ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default React.memo(UserTable);
