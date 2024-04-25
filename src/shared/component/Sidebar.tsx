import { LuChevronDown } from "react-icons/lu";
import {
  Card,
  Typography,
  Accordion,
  AccordionBody,
  AccordionHeader,
  List,
  ListItem,
  ListItemPrefix,
} from "./materialUi";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuProps = {
  label: any;
  variant?: string;
  icon?: React.ReactElement;
  to?: string;
  devider?: boolean;
  children?: MenuProps[];
  active?: boolean;
};

type props = {
  menu: MenuProps[];
  className?: string;
};

type AccordianTypes = {
  item: MenuProps;
  open: boolean;
  active: boolean;
  url: string[];
  handleOpen: () => void;
};

const ButtonComponent = ({ to, label, icon, variant, active }: MenuProps) => {
  return variant === "link" ? (
    <Link href={`/${to}`}>
      <ListItem
        className={`rounded-none px-6 focus:bg-gray-700 hover:bg-gray-700 ${
          active && "border-r-4 border-l-white"
        }`}
      >
        <ListItemPrefix className="text-white">{icon}</ListItemPrefix>
        <Typography
          color="white"
          className={`${active && "font-bold"} mr-auto`}
          variant="small"
        >
          {label}
        </Typography>
      </ListItem>
    </Link>
  ) : (
    <ListItem
      className={`px-6 focus:bg-gray-700 hover:bg-gray-700 ${
        active && "border-r-2 border-l-white"
      }`}
    >
      <ListItemPrefix className="text-white">{icon}</ListItemPrefix>
      <Typography
        color="white"
        variant="small"
        className={`${active && "font-bold"} mr-auto`}
      >
        {label}
      </Typography>
    </ListItem>
  );
};
const AccordionComponent = ({
  item,
  open,
  active,
  url,
  handleOpen,
}: AccordianTypes) => (
  <Accordion
    open={open}
    icon={
      <LuChevronDown
        className={`mx-auto transition-transform text-white ${
          open ? "rotate-180" : ""
        }`}
      />
    }
  >
    <ListItem
      className={`p-0 px-6 ${
        active && "bg-gray-700"
      } rounded-none focus:bg-gray-700 hover:bg-gray-700`}
    >
      <AccordionHeader onClick={handleOpen} className="border-b-0 py-3">
        <ListItemPrefix className="text-white">{item.icon}</ListItemPrefix>
        <Typography
          color="white"
          variant="small"
          className={`${active && "font-semibold"} mr-auto`}
        >
          {item.label}
        </Typography>
      </AccordionHeader>
    </ListItem>
    <AccordionBody className="py-1">
      <List className="p-0">
        {item.children?.map((_item, _i) => (
          <ButtonComponent
            key={_i}
            {..._item}
            {...{ to: `${item.to}/${_item.to}` }}
            {...{ active: url.includes(`${_item.to}`) }}
          />
        ))}
      </List>
    </AccordionBody>
  </Accordion>
);

export default function SidebarComponent({ menu, className }: props) {
  const pathname = usePathname();
  const url: string[] = pathname.split("/").slice(1);

  const [open, setOpen] = React.useState<number>(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className={`h-full w-[15rem] bg-gray-900 rounded-none ${className}`}>
      <div className="mb-2 p-4 py-6">
        <Typography variant="h5" color="white">
          MyFinance App
        </Typography>
      </div>
      <List className="p-0">
        {menu.map((item, i) =>
          item.children ? (
            <div key={i}>
              <AccordionComponent
                key={i}
                item={item}
                open={open === i}
                active={url.includes(`${item.to}`)}
                url={url}
                handleOpen={() => handleOpen(i)}
              />
              {item.devider && <hr className="my-2 border-blue-gray-50" />}
            </div>
          ) : (
            <div key={i}>
              <ButtonComponent
                key={i}
                {...item}
                {...{
                  active: url.includes(`${item.to}`),
                }}
              />
              {item.devider && <hr className="my-2 border-blue-gray-50" />}
            </div>
          )
        )}
      </List>
    </Card>
  );
}
