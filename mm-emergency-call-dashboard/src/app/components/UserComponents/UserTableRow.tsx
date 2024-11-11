import React from 'react'
import { TableRow, TableCell, Checkbox, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { User} from "@/app/(DashboardLayout)/users/page";
import UserRoleBadge from './UserRoleBadge';

interface UserTableRowProps {
    user: User;
    isSelected: boolean;
    onSelect: (user: User) => void;
}

const UserTableRow: React.FC<UserTableRowProps> = ({ user, isSelected, onSelect }) => {
    return (
        <TableRow sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            bgcolor: isSelected ? "#EBF0FF" : "white",
        }}>
            <TableCell>
                <Checkbox
                    checked={isSelected}
                    onChange={() => onSelect(user)}
                />
            </TableCell>
            <TableCell component="th" scope="row">{user.name}</TableCell>
            <TableCell align="left">{user.emailAddress}</TableCell>
            <TableCell align="left">{user.address}</TableCell>
            <TableCell>
                <UserRoleBadge role={user.role} />
            </TableCell>
            <TableCell>
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
            </TableCell>
        </TableRow>
    )
}

export default React.memo(UserTableRow)