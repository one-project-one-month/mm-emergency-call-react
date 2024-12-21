import React from "react";
import { TableRow, TableCell, Checkbox, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { Admin } from "@/types/admins";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { toggleSelectUser } from "@/lib/apps/user/userSlice";
import {
  setIsAllSelected,
  toggleSelectAdmin,
} from "@/lib/apps/admin/adminSlice";
interface AdminTableRowProps {
  admin: Admin;
  index: number;
}

const UserTableRow: React.FC<AdminTableRowProps> = ({ admin, index }) => {
  const dispatch = useDispatch();
  const isAllSelected = useSelector(
    (state: RootState) => state.admin.isAllSelected
  );
  const selectedAdmins = useSelector(
    (state: RootState) => state.admin.selectedAdmins
  );
  const isSelected = selectedAdmins.some(
    (selectedAdmins) => selectedAdmins.id === admin.id
  );

  const handleCheckboxChange = () => {
    dispatch(toggleSelectAdmin(admin));
    dispatch(setIsAllSelected());
  };
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        // bgcolor: isSelected ? "#EBF0FF" : "white",
        bgcolor: "white",
      }}
    >
      {/*   <TableCell>
        <Checkbox
          checked={isAllSelected || isSelected}
          onChange={handleCheckboxChange}
        />
      </TableCell> */}

      <TableCell>{index}.</TableCell>
      <TableCell component="th" scope="row">
        {admin.name}
      </TableCell>
      <TableCell align="left">{admin.emailAddress}</TableCell>

      <TableCell>
        <Link href={`/admins/edit/${admin.id}`}>
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
      </TableCell>
    </TableRow>
  );
};

export default React.memo(UserTableRow);
