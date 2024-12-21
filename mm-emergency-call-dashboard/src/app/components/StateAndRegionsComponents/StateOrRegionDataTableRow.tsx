import { TableCell, TableRow } from "@mui/material";

interface Props {
  index: number;
}
export default function StateOrRegionDataTableRow({ index }: Props) {
  return (
    <TableRow>
      <TableCell>{index}.</TableCell>
      <TableCell>စမ်းချောင်း</TableCell>
      <TableCell>အရှေ့ပိုင်း</TableCell>
      <TableCell>၇</TableCell>
      <TableCell>A,B,C,D</TableCell>
    </TableRow>
  );
}
