import UserTable from "@/app/components/UserComponents/UserTable";
import {
  Box,
  Button,
  Link,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UserTabs from "@/app/components/UserComponents/UserTabs";
import SearchBarAndFilterIcon from "@/app/components/UserComponents/SearchBarAndTableIcon";
import SelectedCountAndBinIcon from "@/app/components/UserComponents/SelectedCountAndBinIcon";

const UserPage = () => {
 
  return (
    <Box>
      <Typography>User</Typography>

      {/* Add User Button */}
      <Box
        sx={{
          mt: 4,
          mb: 4,
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {" "}
        <Link href={"/users/adding-user"}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#5D87FF",
              color: "white",
              ":hover": { bgcolor: "#396efe" },
            }}
          >
            <AddIcon /> Add User
          </Button>
        </Link>
      </Box>

      <Box>
        <UserTabs />
      </Box>

      {/* User Table Container*/}
      <Box
        sx={{
          width: "100%",
          border: "1px solid lightgray",
          borderRadius: "7px",
          position: "relative",
          padding: 2.5,
        }}
      >
        <SelectedCountAndBinIcon />

        <SearchBarAndFilterIcon
        />
        <UserTable />
      </Box>
    </Box>
  );
};

export default UserPage;
