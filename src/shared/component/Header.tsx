// "use client";
import {
  Button,
  Card,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import {
  LuArrowDown,
  LuArrowUp,
  LuChevronDown,
  LuLayoutList,
  LuPlus,
  LuPowerOff,
  LuUser,
} from "react-icons/lu";
import Cookies from "js-cookie";

type props = {
  sideOpen: () => void;
  onLogout: () => void;
  handlerModals: (e: number) => void;
};

export default function HeaderComponent({
  sideOpen,
  onLogout,
  handlerModals,
}: props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuProfileOpen, setIsMenuProfileOpen] = useState(false);
  const [fullname, setFullName] = useState<string>("");

  useEffect(() => {
    setFullName(Cookies.get("fullname") || "");
  }, []);

  return (
    <Card className="flex flex-row justify-between rounded-none px-8 py-4 w-full shadow-none">
      <Button
        onClick={sideOpen}
        className="shadow-none p-0 py-0 hover:shadow-none bg-transparent lg:hidden"
      >
        <LuLayoutList className="w-4 h-4 text-gray-900" />
      </Button>
      <div className="flex flex-row justify-between items-center w-full pl-2 lg:pl-0">
        <div>
          <Typography
            variant="paragraph"
            className="font-semibold text-gray-800"
          >
            {`Hello, ${fullname}`}
          </Typography>
          <Typography variant="small">
            Make sure cash flow is calculated.
          </Typography>
        </div>
        <div className="flex gap-3">
          <Menu
            open={isMenuOpen}
            handler={setIsMenuOpen}
            offset={{ mainAxis: 20 }}
            placement="bottom-end"
            allowHover={false}
          >
            <MenuHandler>
              <Button
                className="rounded-full bg-gray-900 flex items-center gap-1 py-[6px] px-4 font-medium text-white"
                onClick={() => setIsMenuOpen((cur) => !cur)}
              >
                <LuPlus
                  strokeWidth={2.5}
                  className={` h-4 w-4 transition-transform ${
                    isMenuOpen ? "rotate-45" : ""
                  }`}
                />
                <Typography
                  variant="paragraph"
                  className="font-medium capitalize"
                >
                  Mutations
                </Typography>
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem
                onClick={() => handlerModals(1)}
                className="flex gap-3 items-center"
              >
                <LuArrowDown className="h-5 w-5 rotate-45 text-green-700" />
                <Typography
                  variant="small"
                  className="text-gray-700 font-medium whitespace-nowrap"
                >
                  Insert Income
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => handlerModals(2)}
                className="flex gap-3 items-center"
              >
                <LuArrowUp className="h-5 w-5 rotate-45 text-red-700" />
                <Typography
                  variant="small"
                  className="text-gray-700 font-medium whitespace-nowrap"
                >
                  Insert Outcome
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu
            open={isMenuProfileOpen}
            handler={setIsMenuProfileOpen}
            offset={{ mainAxis: 20 }}
            placement="bottom-end"
            allowHover={false}
          >
            <MenuHandler>
              <Button
                className="rounded-full bg-white border border-gray-900 flex items-center gap-2 py-2 px-4 font-medium text-gray-900"
                onClick={() => setIsMenuProfileOpen((cur) => !cur)}
              >
                <LuUser className="h-6 w-6" />
                <LuChevronDown
                  strokeWidth={2.5}
                  className={` h-4 w-4 transition-transform ${
                    isMenuProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem className="flex gap-3 items-center">
                <LuUser className="h-5 w-5" />
                <Typography
                  variant="small"
                  className="text-gray-700 font-medium whitespace-nowrap"
                >
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem onClick={onLogout} className="flex gap-3 items-center">
                <LuPowerOff className="h-5 w-5 text-red-700" />
                <Typography
                  variant="small"
                  className="text-red-700 font-medium whitespace-nowrap"
                >
                  Logout
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      {/* <Card>awdad</Card> */}
    </Card>
  );
}
