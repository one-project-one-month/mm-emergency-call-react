"use client";

import { Box, InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { UserType } from "@/app/(DashboardLayout)/users/page";

interface Props {
  selectedUsers: {
    id: number;
    name: string;
    emailAdress: string;
    adress: string;
    role: UserType;
  }[];
  handleSearchUser: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function SearchBarAndFilterIcon({
  handleSearchUser,
  selectedUsers,
}: Props) {
  return (
    <Box
      sx={{
        opacity: selectedUsers.length ? 0 : 1,
        zIndex: selectedUsers.length ? -1 : 1,
        mb: 2,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextField
        type="text"
        placeholder="Search"
        sx={{ width: "250px" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          },
        }}
        onChange={handleSearchUser}
      />
      <Box>
        <FilterAltOutlinedIcon />
      </Box>
    </Box>
  );
}
