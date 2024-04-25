"use client";
import { Typography } from "@material-tailwind/react";
import React from "react";
import FormSignUp from "./ui/FormSignUp";
import useSignup from "./hooks/useSignup";

export default function SignUpPage() {
  const { handleSignIn } = useSignup();
  return (
    <>
      <div className="pb-4">
        <Typography
          variant="h4"
          className="capitalize text-white font-light text-center"
        >
          make sure cash flow is calculated.
        </Typography>
        <Typography
          variant="paragraph"
          className="capitalize text-white font-semibold text-center text-blue"
        >
          lets sign up for free
        </Typography>
        <Typography
          variant="small"
          className="font-light whitespace-nowrap flex gap-1 pt-6 text-center justify-center"
        >
          have an account?{" "}
          <Typography
            onClick={handleSignIn}
            as="button"
            variant="small"
            className="font-bold"
          >
            Sign In
          </Typography>
        </Typography>
      </div>
      <FormSignUp />
    </>
  );
}
