import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export enum UserType {
  serviceProvider = "Service Provider",
  normalUser = "Normal User",
}
export function createUserData(
  id: number,
  name: string,
  emailAdress: string,
  adress: string,
  role: UserType
) {
  return { id, name, emailAdress, adress, role };
}

export const users = [
  createUserData(
    1,
    "U San Lin Htum",
    "sanlinhtun@gmail.com",
    "Yangon,Hlaing,122th street",
    UserType.serviceProvider
  ),
  createUserData(
    2,
    "U Wunna Aung",
    "wunnaaung@gmail.com",
    "Yangon,San Chaung,122th street",
    UserType.serviceProvider
  ),
  createUserData(
    3,
    "U Min Thiha",
    "minthiha@gmail.com",
    "Yangon,Hlaing,124th street",
    UserType.serviceProvider
  ),
  createUserData(
    4,
    "U Shin Thant Kyaw",
    "shinthantkyaw@gmail.com",
    "Yangon,Hlaing,122th street",
    UserType.normalUser
  ),
  createUserData(
    5,
    "U Sitt Min Aung",
    "sittminaung@gmail.com",
    "Yangon,Hlaing,122th street",
    UserType.normalUser
  ),
];

export default function UserTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
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
            <TableCell align="left" sx={{ width: "10%" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
