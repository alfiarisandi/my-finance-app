"use client";
import { Spinner, Typography } from "@material-tailwind/react";
import React from "react";
import InputCode from "./ui/InputCode";
import InputCodeTwo from "./ui/InputCodeTwo";
import useInputHandler from "./hooks/useHandler";
import moment from "moment";
import { LuInfo } from "react-icons/lu";

export default function ActivationPage({ userId }: { userId: string }) {
  const {
    code,
    handleChange,
    isLoadActivation,
    isLoadResend,
    handleResendCode,
    resendDuration,
    errorActivation,
  } = useInputHandler(userId);
  return (
    <>
      <div className="pb-4">
        <Typography
          variant="h4"
          className="capitalize text-white font-bold text-center pb-3"
        >
          Verification Code.
        </Typography>
        <Typography
          variant="paragraph"
          className="capitalize text-white font-light text-center text-blue"
        >
          Check your email for the verification code.
        </Typography>
        <Typography
          variant="paragraph"
          className="capitalize text-white font-light text-center text-blue"
        >
          and Activate your account.
        </Typography>
      </div>
      <div className="flex justify-center w-full">
        {/* <InputCode /> */}
        <InputCodeTwo onChange={handleChange} value={code} />
        {errorActivation?.response?.data?.message && (
          <div className="flex gap-1 items-center pt-1">
            <LuInfo className="w-2 h-2 text-red-700" />
            <span className="text-xs text-red-700">
              {errorActivation?.response?.data?.message}
            </span>
          </div>
        )}
      </div>
      {isLoadActivation && <div className="loading-bar mt-2"></div>}
      <div className="pt-6 self-start justify-start">
        <Typography
          variant="small"
          className="capitalize text-white font-light text-blue"
        >
          {`Didn't receive a code?`}
        </Typography>
        <div className="flex items-center gap-2">
          <Typography
            as="button"
            variant="small"
            onClick={handleResendCode}
            aria-disabled={isLoadResend || resendDuration !== 0}
            className="capitalize text-white font-bold text-blue aria-disabled:text-white/50 aria-disabled:cursor-default"
          >
            Resend Code
          </Typography>
          {isLoadResend && <Spinner color="gray" className="w-3 h-3" />}
          {resendDuration !== 0 && (
            <Typography variant="small" className="text-xs text-gray-500">
              ({resendDuration} Seconds)
            </Typography>
          )}
        </div>
      </div>
    </>
  );
}
