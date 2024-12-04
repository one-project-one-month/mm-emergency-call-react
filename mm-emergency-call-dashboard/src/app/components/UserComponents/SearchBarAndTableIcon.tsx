'use client'
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { useDispatch } from "react-redux";
import { searchUser } from "@/lib/apps/user/userSlice";
export default function SearchBarAndFilterIcon() {
  const dispatch = useDispatch()
  const handleUserSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    dispatch(searchUser(searchTerm)); 
  };
  return (
    <Box
      sx={{
      
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
        onChange={handleUserSearch}
      />
      <Box>
        <FilterAltOutlinedIcon />
      </Box>
    </Box>
  );
}
