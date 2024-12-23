import UserTable from "@/app/components/UserComponents/UserTable";
import {
    Box,
} from "@mui/material";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import UserTabs from "@/app/components/UserComponents/UserTabs";
import SearchBarAndFilterIcon from "@/app/components/UserComponents/SearchBarAndTableIcon";
import SelectedCountAndBinIcon from "@/app/components/UserComponents/SelectedCountAndBinIcon";
import AddButton from "@/app/components/CustomizedButtons/AddButton";

const UserPage = () => {
    return (
        <Box>
            <Box
                sx={{
                    mt: 4,
                    mb: 4,
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                {/* Root cause for page refresh is here  */}
                <Link href={"/users/create"}>
                    <AddButton>
                        <AddIcon /> Add User
                    </AddButton>
                </Link>
            </Box>
            <Box>
                <UserTabs />
            </Box>
            <Box
                sx={{
                    width: "100%",
                    border: "1px solid lightgray",
                    borderRadius: "7px",
                    position: "relative",
                    padding: 2.5,
                }}
            >
                {/* need to change the code structure */}
                <SelectedCountAndBinIcon /> 

                <SearchBarAndFilterIcon
                />
                <UserTable />
            </Box>
        </Box>
    );
};

export default UserPage;
