import { EmergencyRequest } from "@/types/townships";
import { TableCell, TableRow } from "@mui/material";

interface Props {
  emReq: EmergencyRequest;
  index: number;
}
export default function EmergencyReqTableRow({ emReq, index }: Props) {
  return (
    <TableRow key={emReq.id}>
      {" "}
      <TableCell sx={{ width: "10%" }}>{index + 1}</TableCell>
      <TableCell sx={{ width: "30%" }}>{emReq.emergencyName}</TableCell>
      <TableCell align="left" sx={{ width: "30%" }}>
        {emReq.incidentLocation}
      </TableCell>
      <TableCell align="left" sx={{ width: "30%" }}>
        {emReq.userId}
      </TableCell>
      <TableCell align="left" sx={{ width: "30%" }}>
        {emReq.status}
      </TableCell>
    </TableRow>
  );
}
