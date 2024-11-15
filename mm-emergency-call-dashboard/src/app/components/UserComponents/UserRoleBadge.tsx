import React from 'react'
import { Box } from "@mui/material";
import { UserType } from '@/types/users';

interface UserRoleBadgeProps {
    role: UserType
}

const UserRoleBadge: React.FC<UserRoleBadgeProps> = ({ role }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
                sx={{
                    mr: 1,
                    width: "10px",
                    height: "10px",
                    bgcolor: role === UserType.NORMAL_USER ? "#FA896B" : "#4570EA",
                }}
            />
            {role}
        </Box>
    )
}

export default UserRoleBadge