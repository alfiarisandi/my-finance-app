import { Input } from "@material-tailwind/react";
import React from "react";
import useInputHandler from "../hooks/useHandler";

const InputValue = ({ ref, onChange, onKeyUp }: any) => (
  <Input
    ref={ref}
    onChange={onChange}
    onKeyUp={onKeyUp}
    maxLength={1}
    crossOrigin={""}
    className="!w-12 !h-12 text-center text-xl !border !border-white bg-black text-white shadow-lg shadow-white/5 ring-4 ring-transparent  focus:!border-white focus:!border-t-white focus:ring-white/20"
    labelProps={{
      className: "hidden",
    }}
    containerProps={{ className: "min-w-[0px]" }}
  />
);

export default function InputCode() {
  // const handler = useInputHandler();
  // const handler = useInputHandler();
  return (
    <></>
    // <div className="flex justify-center gap-3">
    //   <Input
    //     ref={handler.boxReference}
    //     onChange={(e) => handler.handleChange(e, 0)}
    //     // onKeyUp={onKeyUp}
    //     maxLength={1}
    //     crossOrigin={""}
    //     className="!w-12 !h-12 text-center text-xl !border !border-white bg-black text-white shadow-lg shadow-white/5 ring-4 ring-transparent  focus:!border-white focus:!border-t-white focus:ring-white/20"
    //     labelProps={{
    //       className: "hidden",
    //     }}
    //     containerProps={{ className: "min-w-[0px]" }}
    //   />
    //   <Input
    //     ref={handler.boxReference1}
    //     onChange={(e) => handler.handleChange(e, 1)}
    //     // onKeyUp={onKeyUp}
    //     maxLength={1}
    //     crossOrigin={""}
    //     className="!w-12 !h-12 text-center text-xl !border !border-white bg-black text-white shadow-lg shadow-white/5 ring-4 ring-transparent  focus:!border-white focus:!border-t-white focus:ring-white/20"
    //     labelProps={{
    //       className: "hidden",
    //     }}
    //     containerProps={{ className: "min-w-[0px]" }}
    //   />
    //   <Input
    //     ref={handler.boxReference2}
    //     onChange={(e) => handler.handleChange(e, 2)}
    //     // onKeyUp={onKeyUp}
    //     maxLength={1}
    //     crossOrigin={""}
    //     className="!w-12 !h-12 text-center text-xl !border !border-white bg-black text-white shadow-lg shadow-white/5 ring-4 ring-transparent  focus:!border-white focus:!border-t-white focus:ring-white/20"
    //     labelProps={{
    //       className: "hidden",
    //     }}
    //     containerProps={{ className: "min-w-[0px]" }}
    //   />
    //   <Input
    //     ref={handler.boxReference3}
    //     onChange={(e) => handler.handleChange(e, 3)}
    //     // onKeyUp={onKeyUp}
    //     maxLength={1}
    //     crossOrigin={""}
    //     className="!w-12 !h-12 text-center text-xl !border !border-white bg-black text-white shadow-lg shadow-white/5 ring-4 ring-transparent  focus:!border-white focus:!border-t-white focus:ring-white/20"
    //     labelProps={{
    //       className: "hidden",
    //     }}
    //     containerProps={{ className: "min-w-[0px]" }}
    //   />
    //   <Input
    //     ref={handler.boxReference4}
    //     onChange={(e) => handler.handleChange(e, 4)}
    //     // onKeyUp={onKeyUp}
    //     maxLength={1}
    //     crossOrigin={""}
    //     className="!w-12 !h-12 text-center text-xl !border !border-white bg-black text-white shadow-lg shadow-white/5 ring-4 ring-transparent  focus:!border-white focus:!border-t-white focus:ring-white/20"
    //     labelProps={{
    //       className: "hidden",
    //     }}
    //     containerProps={{ className: "min-w-[0px]" }}
    //   />
    //   <Input
    //     ref={handler.boxReference5}
    //     onChange={(e) => handler.handleChange(e, 5)}
    //     // onKeyUp={onKeyUp}
    //     maxLength={1}
    //     crossOrigin={""}
    //     className="!w-12 !h-12 text-center text-xl !border !border-white bg-black text-white shadow-lg shadow-white/5 ring-4 ring-transparent  focus:!border-white focus:!border-t-white focus:ring-white/20"
    //     labelProps={{
    //       className: "hidden",
    //     }}
    //     containerProps={{ className: "min-w-[0px]" }}
    //   />
    // </div>
  );
}
