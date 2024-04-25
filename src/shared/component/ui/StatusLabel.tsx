import { Typography } from "@/shared/component/materialUi";
import { LuArrowDown, LuArrowUp } from "react-icons/lu";

const Label = ({ className, text }: { className: string; text: string }) => (
  <div className={`py-2 px-3 rounded-full w-fit ${className}`}>
    <Typography variant="small" className="text-xs text-center font-semibold">
      {text}
    </Typography>
  </div>
);

const LabelIcon = ({
  className,
  text,
  icon,
}: {
  className: string;
  text: string;
  icon: React.ReactElement;
}) => (
  <div className={`py-2 px-3 rounded-full w-fit ${className}`}>
    <Typography as="div" className="flex items-center justify-center">
      {icon}
      <Typography variant="small" className="text-xs text-center font-semibold">
        {text}
      </Typography>
    </Typography>
  </div>
);

export const StatusLabel = ({
  type,
}: {
  type: number | "Income" | "Outcome";
}) =>
  type === 1 ? (
    <Label className="text-red-800 bg-red-200" text="Failed" />
  ) : type === 2 ? (
    <Label className="text-green-800 bg-green-200" text="Success" />
  ) : type === "Income" ? (
    <LabelIcon
      icon={<LuArrowDown className="rotate-45 text-green-800" />}
      className="text-green-800 bg-green-200"
      text="Income"
    />
  ) : type === "Outcome" ? (
    <LabelIcon
      icon={<LuArrowUp className="rotate-45 text-red-800" />}
      className="text-red-800 bg-red-200"
      text="Outcome"
    />
  ) : (
    <></>
  );
