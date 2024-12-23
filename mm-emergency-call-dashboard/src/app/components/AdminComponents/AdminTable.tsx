"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AdminTableRow from "./AdminTableRow";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";


const AdminTable: React.FC = () => {
  const admins = useSelector((state: RootState) => state.admin.admins);

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderTop: "1px solid rgba(224, 224, 224, 1)",
        "& .MuiTableCell-root": {
          fontSize: "14px", 
        },
        "& thead .MuiTableCell-root": {
          fontSize: "13.5px",
          fontWeight: "bold",
        },
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "2%" }}>No</TableCell>
            <TableCell sx={{ width: "20%" }}>Name</TableCell>
            <TableCell align="left" sx={{ width: "25%" }}>
              Email Adress
            </TableCell>

            <TableCell align="left" sx={{ width: "8%" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admins.map((admin, index) => (
            <AdminTableRow key={admin.id} admin={admin} index={index + 1} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(AdminTable);
