"use client";
import { Typography } from "@/shared/component/materialUi";
import Image from "next/image";
import React from "react";
import FormLogin from "./ui/FormLogin";
import useAuth from "./hooks/useAuth";

export default function LoginPage() {
  const { handleSignUp } = useAuth();
  return (
    <>
      <div className="pb-10">
        <Typography
          variant="h4"
          className="capitalize text-white font-light text-center"
        >
          make sure cash flow is calculated.
        </Typography>
        <Typography
          variant="paragraph"
          className="capitalize text-white font-semibold text-center"
        >
          lets sign you in
        </Typography>
      </div>
      <FormLogin />
      <Typography
        variant="small"
        className="font-light whitespace-nowrap flex gap-1 pt-10"
      >
        Dont have an account?{" "}
        <Typography
          onClick={handleSignUp}
          as="button"
          variant="small"
          className="font-bold"
        >
          Sign Up
        </Typography>
      </Typography>
    </>
  );
}
