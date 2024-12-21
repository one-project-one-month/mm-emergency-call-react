import AdminTable from "@/app/components/AdminComponents/AdminTable";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import SearchBarAndFilterIcon from "@/app/components/UserComponents/SearchBarAndTableIcon";
import SelectedCountAndBinIcon from "@/app/components/UserComponents/SelectedCountAndBinIcon";

const AdminPage = () => {
  return (
    <Box>
      <Typography>Admin</Typography>

      {/* Add Admin Button */}
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
        <Link href={"/admins/create"}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#5D87FF",
              color: "white",
              ":hover": { bgcolor: "#396efe" },
            }}
          >
            <AddIcon /> Add Admin
          </Button>
        </Link>
      </Box>

      {/* Admin Table Container*/}
      <Box
        sx={{
          width: "100%",
          border: "1px solid lightgray",
          borderRadius: "7px",
          position: "relative",
          padding: 2.5,
        }}
      >
        <SearchBarAndFilterIcon />
        <AdminTable />
      </Box>
    </Box>
  );
};

export default AdminPage;
