import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { users, UserType } from "@/app/(DashboardLayout)/users/page";

interface Props {
  setUsersByRole: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
        emailAdress: string;
        adress: string;
        role: UserType;
      }[]
    >
  >;
  setUsersToShow: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
        emailAdress: string;
        adress: string;
        role: UserType;
      }[]
    >
  >;
}

export default function UserTabs({ setUsersByRole, setUsersToShow }: Props) {
  const [userRole, SetUserRole] = React.useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    SetUserRole(newValue);
    if (!newValue) {
      setUsersByRole(users);
      setUsersToShow(users);
    } else if (newValue) {
      const selectedUsers = users.filter((user) => user.role === newValue);
      setUsersByRole(selectedUsers);
      setUsersToShow(selectedUsers);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        /*  display: "flex",
        justifyContent: "center", */
        mb: 3,
        typography: "body1",
      }}
    >
      <TabContext value={userRole}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="" />
            <Tab label="Service Provider" value={UserType.serviceProvider} />
            <Tab label="Normal User" value={UserType.normalUser} />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
