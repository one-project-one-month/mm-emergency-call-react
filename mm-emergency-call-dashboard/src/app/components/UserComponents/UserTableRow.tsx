import React from "react";
import { TableRow, TableCell, Checkbox, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import UserRoleBadge from "./UserRoleBadge";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { setIsAllSelected, toggleSelectUser } from "@/lib/apps/user/userSlice";
import { User } from "@/types/users";
interface UserTableRowProps {
    user: User;
}

const UserTableRow: React.FC<UserTableRowProps> = ({ user }) => {
    const dispatch = useDispatch();
    const isAllSelected = useSelector(
        (state: RootState) => state.user.isAllSelected
    );
    const selectedUsers = useSelector(
        (state: RootState) => state.user.selectedUsers
    );
    const isSelected = selectedUsers.some(
        (selectedUser) => selectedUser.id === user.id
    );

    const handleCheckboxChange = () => {
        dispatch(toggleSelectUser(user));
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
            <TableCell>
                <Checkbox
                    checked={isAllSelected || isSelected}
                    onChange={handleCheckboxChange}
                />
            </TableCell>
            <TableCell component="th" scope="row">
                {user.name}
            </TableCell>
            <TableCell align="left">{user.emailAddress}</TableCell>
            <TableCell align="left">{user.address}</TableCell>
            <TableCell>
                <UserRoleBadge role={user.role} />
            </TableCell>
            <TableCell>
                <Link href={`/users/edit/${user.id}`}>
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
