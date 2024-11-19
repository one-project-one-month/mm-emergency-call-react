"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useDispatch } from "react-redux";
import { filterUserByRole, setIsAllSelected } from "@/lib/apps/user/userSlice";
import { FilterByRole, UserType } from "@/types/users";

const ROLE_TABS: { label: FilterByRole; value: FilterByRole }[] = [
  { label: "All", value: "All" },
  { label: UserType.NORMAL_USER, value: UserType.NORMAL_USER },
  { label: UserType.SERVICE_PROVIDER, value: UserType.SERVICE_PROVIDER },
];

export default function UserTabs() {
  const dispatch = useDispatch();
  const [userRole, setUserRole] = useState<FilterByRole>("All");

  const handleChange = (e: React.SyntheticEvent, newValue: FilterByRole) => {
    e.preventDefault();
    setUserRole(newValue);
    dispatch(filterUserByRole(newValue));
    dispatch(setIsAllSelected());
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
