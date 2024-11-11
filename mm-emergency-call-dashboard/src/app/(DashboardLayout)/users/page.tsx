"use client";

import UserTable from "@/app/components/UserComponents/UserTable";
import {
  Box,
  Button,
  Link,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import UserTabs from "@/app/components/UserComponents/UserTabs";
import SearchBarAndFilterIcon from "@/app/components/UserComponents/SearchBarAndTableIcon";
import SelectedCountAndBinIcon from "@/app/components/UserComponents/SelectedCountAndBinIcon";

// use UPPERCASE FOR enum
export enum UserType {
  SERVICE_PROVIDER = "Service Provider",
  NORMAL_USER = "Normal User",
}

// use interface to define shape of the User Obj
export interface User {
  id: number,
  name: string,
  emailAddress: string,
  address: string,
  role: UserType
}

// users array only accept User Objects
export const users: User[] = [
  { id: 1, name: "U San Lin Htun", emailAddress: "sanlinhtun@gmail.com", address: "Yangon, Hlaing, 122th street", role: UserType.SERVICE_PROVIDER },
  { id: 2, name: "U Wunna Aung", emailAddress: "wunnaaung@gmail.com", address: "Yangon, San Chaung, 122th street", role: UserType.SERVICE_PROVIDER },
  { id: 3, name: "U Min Thiha", emailAddress: "minthiha@gmail.com", address: "Yangon, Hlaing, 124th street", role: UserType.SERVICE_PROVIDER },
  { id: 4, name: "U Shin Thant Kyaw", emailAddress: "shinthantkyaw@gmail.com", address: "Yangon, Hlaing, 122th street", role: UserType.NORMAL_USER },
  { id: 5, name: "U Sitt Min Aung", emailAddress: "sittminaung@gmail.com", address: "Yangon, Hlaing, 122th street", role: UserType.NORMAL_USER }
];


// export function createUserData(
//   id: number,
//   name: string,
//   emailAdress: string,
//   adress: string,
//   role: UserType
// ) {
//   return { id, name, emailAdress, adress, role };
// }



// export const users = [
//   createUserData(
//     1,
//     "U San Lin Htum",
//     "sanlinhtun@gmail.com",
//     "Yangon,Hlaing,122th street",
//     UserType.SERVICE_PROVIDER
//   ),
//   createUserData(
//     2,
//     "U Wunna Aung",
//     "wunnaaung@gmail.com",
//     "Yangon,San Chaung,122th street",
//     UserType.
//   ),
//   createUserData(
//     3,
//     "U Min Thiha",
//     "minthiha@gmail.com",
//     "Yangon,Hlaing,124th street",
//     UserType.serviceProvider
//   ),
//   createUserData(
//     4,
//     "U Shin Thant Kyaw",
//     "shinthantkyaw@gmail.com",
//     "Yangon,Hlaing,122th street",
//     UserType.normalUser
//   ),
//   createUserData(
//     5,
//     "U Sitt Min Aung",
//     "sittminaung@gmail.com",
//     "Yangon,Hlaing,122th street",
//     UserType.normalUser
//   ),
// ];

const UserPage = () => {
  const [usersByRole, setUsersByRole] = useState<User[]>(users);
  const [usersToShow, setUsersToShow] = useState<User[]>(usersByRole);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  const handleSearchUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    const searchedUsers = usersByRole.filter((user) =>
      user.name.toLowerCase().includes(searchValue)
    );
    setUsersToShow(searchValue ? searchedUsers : usersByRole);
  };

  console.log("selected users are", selectedUsers);
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

      {/* User Tabs */}
      <Box>
        <UserTabs
          setUsersByRole={setUsersByRole}
          setUsersToShow={setUsersToShow}
        />
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
        {/* User Table Top Bar */}
        <SelectedCountAndBinIcon selectedUsers={selectedUsers} />

        <SearchBarAndFilterIcon
          handleSearchUser={handleSearchUser}
          selectedUsers={selectedUsers}
        />

        {/* Table */}
        <UserTable
          usersByRole={usersByRole}
          usersToShow={usersToShow}
          selectedUsers={selectedUsers}
          setSelectedUsers={setSelectedUsers}
        />
      </Box>
    </Box>
  );
};

export default UserPage;
