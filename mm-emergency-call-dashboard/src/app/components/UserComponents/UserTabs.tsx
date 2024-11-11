import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { User, users, UserType } from "@/app/(DashboardLayout)/users/page";

// interface Props {
//   setUsersByRole: React.Dispatch<
//     React.SetStateAction<
//       {
//         id: number;
//         name: string;
//         emailAdress: string;
//         adress: string;
//         role: UserType;
//       }[]
//     >
//   >;
//   setUsersToShow: React.Dispatch<
//     React.SetStateAction<
//       {
//         id: number;
//         name: string;
//         emailAdress: string;
//         adress: string;
//         role: UserType;
//       }[]
//     >
//   >;
// }

interface UserProps {
  setUsersByRole: React.Dispatch<React.SetStateAction<User[]>>;
  setUsersToShow: React.Dispatch<React.SetStateAction<User[]>>;
}

type UserRoleTabs = "All" | UserType;

const ROLE_TABS: { label: UserRoleTabs; value: UserRoleTabs }[] = [
  { label: "All", value: "All" },
  { label: UserType.SERVICE_PROVIDER, value: UserType.SERVICE_PROVIDER },
  { label: UserType.NORMAL_USER, value: UserType.NORMAL_USER },
];

export default function UserTabs({
  setUsersByRole,
  setUsersToShow,
}: UserProps) {
  const [userRole, setUserRole] = useState<UserRoleTabs>("All");

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: UserRoleTabs
  ) => {
    setUserRole(newValue);
    const filteredUsers =
      newValue === "All"
        ? users
        : users.filter((user) => user.role === newValue);
    setUsersByRole(filteredUsers);
    setUsersToShow(filteredUsers);
  };

  return (
    <Box sx={{ width: "100%", mb: 3, typography: "body1" }}>
      <TabContext value={userRole}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="User role tabs">
            {ROLE_TABS.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
