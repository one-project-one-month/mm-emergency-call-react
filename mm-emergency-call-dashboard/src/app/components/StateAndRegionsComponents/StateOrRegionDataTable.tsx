"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StateOrRegionDataTableRow from "./StateOrRegionDataTableRow";
import { StatesAndRegions } from "@/types/states-and-regions";
import { Typography } from "@mui/material";

interface Props {
  stateOrRegionName: StatesAndRegions;
}
export default function StateOrRegionDataTable({ stateOrRegionName }: Props) {
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
      <Typography>{stateOrRegionName}</Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>စဉ်</TableCell>
            <TableCell sx={{ width: "15%" }}> မြို့နယ်</TableCell>
            <TableCell sx={{ width: "15%" }}>ခရိုင်</TableCell>
            <TableCell sx={{ width: "35%" }}>
              စာရင်းသွင်းထားသော လူမှုကူညီရေးအသင်းအရေအတွက်{" "}
            </TableCell>
            <TableCell align="left" sx={{ width: "35%" }}>
              အဖြစ်များသော Emergency Case
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StateOrRegionDataTableRow index={1} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
