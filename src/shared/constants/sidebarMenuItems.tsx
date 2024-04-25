import {
  LuArrowDown,
  LuArrowUp,
  LuDatabase,
  LuFileDown,
  LuLayoutDashboard,
} from "react-icons/lu";

export const menuItems = [
  {
    label: "Dashboard",
    icon: <LuLayoutDashboard className="w-4 h-4" />,
    variant: "link",
    to: "",
  },
  {
    label: "Master Data",
    icon: <LuDatabase className="w-4 h-4" />,
    variant: "button",
    to: "master-data",
    children: [
      {
        label: "Income",
        to: "income",
        variant: "link",
        icon: <LuArrowDown className="rotate-45 h4 w-4" />,
      },
      {
        label: "Outcome",
        to: "outcome",
        variant: "link",
        icon: <LuArrowUp className="rotate-45 h4 w-4" />,
      },
    ],
  },
  {
    label: "Report",
    icon: <LuFileDown className="w-4 h-4" />,
    variant: "link",
    to: "report",
  },
];
