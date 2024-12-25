import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EmergencyReqTableRow from "./EmergencyReqTableRow";
import { EmergencyRequest } from "@/types/emergencyReq";

interface Props {
  currentEmergencyReqs: EmergencyRequest[];
}
export default function EmergencyReqTable({ currentEmergencyReqs }: Props) {
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
            <TableCell sx={{ width: "10%" }}>No</TableCell>
            <TableCell sx={{ width: "20%" }}>Emergency Name</TableCell>
            <TableCell align="left" sx={{ width: "30%" }}>
              Incident Location
            </TableCell>
            <TableCell align="left" sx={{ width: "20%" }}>
              Requested User
            </TableCell>

            <TableCell align="left" sx={{ width: "20%" }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {currentEmergencyReqs.map((emReq, index) => {
            return (
              <EmergencyReqTableRow
                key={emReq.id}
                emReq={emReq}
                index={index}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
