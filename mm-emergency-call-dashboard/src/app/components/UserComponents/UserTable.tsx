import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";
import Link from "next/link";
import { users, UserType } from "@/app/(DashboardLayout)/users/page";
import Checkbox from "@mui/material/Checkbox";

interface Props {
  usersByRole: {
    id: number;
    name: string;
    emailAdress: string;
    adress: string;
    role: UserType;
  }[];
  usersToShow: {
    id: number;
    name: string;
    emailAdress: string;
    adress: string;
    role: UserType;
  }[];
  selectedUsers: {
    id: number;
    name: string;
    emailAdress: string;
    adress: string;
    role: UserType;
  }[];
  setSelectedUsers: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
        emailAdress: string;
        adress: string;
        role: UserType;
      }[]
    >
  >;
}

export default function UserTable({
  usersByRole,
  usersToShow,
  selectedUsers,
  setSelectedUsers,
}: Props) {
  const isAllSelected =
    selectedUsers.length === usersByRole.length ? true : false;

  const handleChangSelectedUsers = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value === "all") {
      if (isAllSelected) {
        const newSelectedUsers: any = [];
        setSelectedUsers(newSelectedUsers);
      } else if (!isAllSelected) {
        const newSelectedUsers = usersByRole;
        setSelectedUsers(newSelectedUsers);
      }
    } else {
      const clickedUser = users.find(
        (user) => user.emailAdress === event.target.value
      );

      if (clickedUser && selectedUsers.includes(clickedUser)) {
        const newSelectedUsers = selectedUsers.filter(
          (user) => user.emailAdress !== clickedUser.emailAdress
        );
        setSelectedUsers(newSelectedUsers);
      } else if (clickedUser && !selectedUsers.includes(clickedUser)) {
        const newSelectedUsers = [...selectedUsers, clickedUser];
        setSelectedUsers(newSelectedUsers);
      }
    }
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
              <Checkbox
                checked={isAllSelected}
                value="all"
                onChange={handleChangSelectedUsers}
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
          {usersToShow.map((user) => {
            const isSelectedUser = selectedUsers.includes(user) ? true : false;
            return (
              <TableRow
                key={user.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  bgcolor: selectedUsers.includes(user) ? "#EBF0FF" : "white",
                }}
              >
                <TableCell>
                  {/* ဒီမှာ နောက်ပိုင်းကျရင် id ကိုသုံးမယ်။ လောလောဆယ် id မရှိသေးလို့ email ကို သုံးထား။ */}
                  <Checkbox
                    checked={isSelectedUser}
                    value={user.emailAdress}
                    onChange={handleChangSelectedUsers}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="left">{user.emailAdress}</TableCell>
                <TableCell align="left">{user.adress}</TableCell>
                <TableCell align="left">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        mr: 1,
                        width: "10px",
                        height: "10px",
                        bgcolor:
                          user.role === UserType.normalUser
                            ? "#FA896B"
                            : "#4570EA",
                      }}
                    ></Box>
                    {user.role}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      width: "100%", // Make it full width to align it to the right
                      display: "flex",
                      justifyContent: "flex-start", // Aligns the icon to the right
                      alignItems: "center",
                    }}
                  >
                    <Link href={`/users/updating-user/${user.id}`}>
                      <Box
                        sx={{
                          width: "30px",
                          height: "30px",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          "&:hover": {
                            bgcolor: "lightgray",
                            borderRadius: "100%",
                          },
                        }}
                      >
                        <EditIcon fontSize="small" />
                      </Box>
                    </Link>
                  </Box>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
