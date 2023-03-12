import dashboardSolid from "@iconify/icons-clarity/dashboard-solid";
import barChartRounded from "@iconify/icons-material-symbols/bar-chart-rounded";
import userGroup from "@iconify/icons-mdi/user-group";
import shoppingBagFill from "@iconify/icons-ph/shopping-bag-fill";
import { Icon } from "@iconify/react";

export const pages = [
  {
    name: "App",
    icon: <Icon icon={dashboardSolid} height={22} />,
    link: "app",
  },
  {
    name: "E-Commerce",
    icon: <Icon icon={shoppingBagFill} height={22} />,
    link: "ecommerce",
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
