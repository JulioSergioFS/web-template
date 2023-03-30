import dashboardSolid from "@iconify/icons-clarity/dashboard-solid";
import barChartRounded from "@iconify/icons-material-symbols/bar-chart-rounded";
import userGroup from "@iconify/icons-mdi/user-group";
import { Icon } from "@iconify/react";

export const pages = [
  {
    name: "Home",
    icon: <Icon icon={dashboardSolid} height={22} />,
    link: "home",
  },
  {
    name: "Charts",
    icon: <Icon icon={barChartRounded} height={22} />,
    link: "charts",
  },
  {
    name: "Users",
    icon: <Icon icon={userGroup} height={22} />,
    link: "users",
  },
];
