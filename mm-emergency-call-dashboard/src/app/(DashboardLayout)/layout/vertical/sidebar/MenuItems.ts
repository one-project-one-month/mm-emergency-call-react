import { uniqueId } from "lodash";

interface MenuitemsType {
    [x: string]: any;
    id?: string;
    navlabel?: boolean;
    subheader?: string;
    title?: string;
    icon?: any;
    href?: string;
    children?: MenuitemsType[];
    chip?: string;
    chipColor?: string;
    variant?: string;
    external?: boolean;
}
import {
    IconAward,
    IconBoxMultiple,
    IconPoint,
    IconAlertCircle,
    IconNotes,
    IconCalendar,
    IconMail,
    IconTicket,
    IconEdit,
    IconGitMerge,
    IconCurrencyDollar,
    IconApps,
    IconFileDescription,
    IconFileDots,
    IconFiles,
    IconBan,
    IconStar,
    IconMoodSmile,
    IconBorderAll,
    IconBorderHorizontal,
    IconBorderInner,
    IconBorderVertical,
    IconBorderTop,
    IconUserCircle,
    IconPackage,
    IconMessage2,
    IconBasket,
    IconChartLine,
    IconChartArcs,
    IconChartCandle,
    IconChartArea,
    IconChartDots,
    IconChartDonut3,
    IconChartRadar,
    IconLogin,
    IconUserPlus,
    IconRotate,
    IconBox,
    IconShoppingCart,
    IconAperture,
    IconLayout,
    IconSettings,
    IconHelp,
    IconZoomCode,
    IconBoxAlignBottom,
    IconBoxAlignLeft,
    IconBorderStyle2,
    IconLockAccess,
    IconAppWindow,
    IconDashboard,
    IconLocation,
    IconMap,
    IconMap2,
    IconLocationBolt,
    IconBuilding,
    IconBuildingEstate,
    IconHeartbeat,
    IconUserHexagon,
    IconUsers,
    IconChartInfographic,
} from "@tabler/icons-react";

const Menuitems: MenuitemsType[] = [
    {
        navlabel: true,
        subheader: "Home",
    },

    {
        id: uniqueId(),
        title: "Dashboard",
        icon: IconDashboard,
        href: "/",
    },
    {
        navlabel: true,
        subheader: "Setup",
    },
    {
        id: uniqueId(),
        title: "States & Regions",
        icon: IconMap,
        href: "/setup/states-and-regions",
    },
    {
        id: uniqueId(),
        title: "Townships",
        icon: IconBuildingEstate,
        href: "/setup/townships",
    },
    {
        id: uniqueId(),
        title: "Emergency Services",
        icon: IconHeartbeat,
        href: "/emergency-services/",
        children: [
            {
                id: uniqueId(),
                title: "Pending",
                icon: IconPoint,
                href: "/emergency-services/pending",
            },
            {
                id: uniqueId(),
                title: "Approved",
                icon: IconPoint,
                href: "/emergency-services/approved",
            },
            {
                id: uniqueId(),
                title: "Rejected",
                icon: IconPoint,
                href: "/emergency-services/rejected",
            },
        ],
    },
    {
        id: uniqueId(),
        title: "Admins",
        icon: IconUserHexagon,
        href: "/admins",
    },
    {
        id: uniqueId(),
        title: "Users",
        icon: IconUsers,
        href: "/users",
    },
    {
        id: uniqueId(),
        title: "Reports",
        icon: IconChartInfographic,
        href: "/reports",
    },


];

export default Menuitems;
