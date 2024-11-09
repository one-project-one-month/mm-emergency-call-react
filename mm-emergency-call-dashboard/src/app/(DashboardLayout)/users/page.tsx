import UserTable from "@/app/components/UserComponents/UserTable";
import { Box, Button, Link, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import React from "react";

const page = () => {
  return (
    <Box>
      <Typography>User</Typography>

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
              ":hover": { bgcolor: "#253945", color: "#b0d8f0" },
            }}
          >
            <AddIcon /> Add User
          </Button>
        </Link>
      </Box>
      <UserTable />
    </Box>
  );
};

export default page;
