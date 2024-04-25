"use client";
import SidebarComponent from "./Sidebar";
import { menuItems } from "../constants/sidebarMenuItems";
import HeaderComponent from "./Header";
import { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialHandler,
  Typography,
} from "@material-tailwind/react";
import { LuHome, LuPlus } from "react-icons/lu";
import SpeedDialComponent from "./ui/SpeedDial";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import ModalComponent from "./modals/Modal";
type props = {
  onLogout: () => void;
  children: React.ReactNode;
};

export default function LayoutComponent({ onLogout, children }: props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const [openModals, setOpenModals] = useState(0);

  return pathname.startsWith("/auth") ? (
    children
  ) : (
    <div className="relative overflow-y-auto">
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        className="w-[240px] block lg:hidden"
        overlay={false}
      >
        <div className="flex flex-col bg-gray-900 h-full w-full">
          <Button
            onClick={() => setOpen(false)}
            className="shadow-none p-2 bg-gray-900 self-end mr-3 mt-3"
          >
            <LuPlus className="w-5 h-5 text-white rotate-45" />
          </Button>
          <SidebarComponent menu={menuItems} className="overflow-y-auto" />
        </div>
      </Drawer>
      <SidebarComponent
        menu={menuItems}
        className="hidden fixed right-auto lg:block"
      />
      <div className="w-full overflow-y-auto lg:pl-[15rem]">
        <HeaderComponent
          onLogout={onLogout}
          sideOpen={() => setOpen(true)}
          handlerModals={(e: number) => setOpenModals(e)}
        />
        <div className="px-8 py-2">{children}</div>
      </div>
      <ModalComponent
        openModals={openModals}
        handler={() => setOpenModals(0)}
      />
    </div>
  );
}
