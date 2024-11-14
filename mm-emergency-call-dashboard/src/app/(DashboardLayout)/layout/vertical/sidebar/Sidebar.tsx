import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SidebarItems from "./SidebarItems";
import Logo from "../../shared/logo/Logo";
import { useAppDispatch, useAppSelector} from "@/lib/hooks";
import {
    hoverSidebar,
    toggleMobileSidebar,
} from "@/lib/customizer/CustomizerSlice";
import Scrollbar from "@/app/components/custom-scroll/Scrollbar";
import { Profile } from "./SidebarProfile/Profile";
import { AppState } from "@/lib/store";

const Sidebar = () => {
    const lgUp = useMediaQuery((theme: any) => theme.breakpoints.down("lg"));
    const customizer = useAppSelector((state: AppState) => state.customizer);
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const toggleWidth =
        customizer.isCollapse && !customizer.isSidebarHover
            ? customizer.MiniSidebarWidth
            : customizer.SidebarWidth;

    const onHoverEnter = () => {
        if (customizer.isCollapse) {
            dispatch(hoverSidebar(true));
        }
    };

    const onHoverLeave = () => {
        dispatch(hoverSidebar(false));
    };

    return (
        <>
            {!lgUp ? (
                <Box
                    sx={{
                        zIndex: 100,
                        width: toggleWidth,
                        flexShrink: 0,
                        ...(customizer.isCollapse && {
                            position: "absolute",
                        }),
                    }}
                >
                    {/* ------------------------------------------- */}
                    {/* Sidebar for desktop */}
                    {/* ------------------------------------------- */}
                    <Drawer
                        anchor="left"
                        open
                        onMouseEnter={onHoverEnter}
                        onMouseLeave={onHoverLeave}
                        variant="permanent"
                        PaperProps={{
                            sx: {
                                transition: theme.transitions.create("width", {
                                    duration: theme.transitions.duration.shortest,
                                }),
                                width: toggleWidth,
                                boxSizing: "border-box",
                            },
                        }}
                    >
                        {/* ------------------------------------------- */}
                        {/* Sidebar Box */}
                        {/* ------------------------------------------- */}
                        <Box
                            sx={{
                                height: "100%",
                            }}
                        >
                            {/* ------------------------------------------- */}
                            {/* Logo */}
                            {/* ------------------------------------------- */}
                            <Box px={3}>
                                <Logo />
                            </Box>
                            <Scrollbar sx={{ height: "calc(100% - 190px)" }}>
                                {/* ------------------------------------------- */}
                                {/* Sidebar Items */}
                                {/* ------------------------------------------- */}
                                <SidebarItems />
                            </Scrollbar>
                            <Profile />
                        </Box>
                    </Drawer>
                </Box>
            ) : (
                <Drawer
                    anchor="left"
                    open={customizer.isMobileSidebar}
                    onClose={() => dispatch(toggleMobileSidebar())}
                    variant="temporary"
                    PaperProps={{
                        sx: {
                            width: customizer.SidebarWidth,
                            border: "0 !important",
                            boxShadow: (theme) => theme.shadows[8],
                        },
                    }}
                >
                    {/* ------------------------------------------- */}
                    {/* Logo */}
                    {/* ------------------------------------------- */}
                    <Box px={2}>
                        <Logo />
                    </Box>
                    {/* ------------------------------------------- */}
                    {/* Sidebar For Mobile */}
                    {/* ------------------------------------------- */}
                    <SidebarItems />
                </Drawer>
            )}
        </>
    );
};

export default Sidebar;
