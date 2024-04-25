"use client";
import { InputForm } from "@/shared/component/ui/form/InputForm";
import React from "react";
import { FormProvider } from "react-hook-form";
import useSignup from "../hooks/useSignup";
import { Button, Spinner, Typography } from "@material-tailwind/react";
import { LuInfo } from "react-icons/lu";

export default function FormSignUp() {
  const { form, onSubmit, mutationQuery } = useSignup();
  const { isLoading, error } = mutationQuery;
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="text-white w-full lg:w-[80%] flex flex-col gap-3"
      >
        <InputForm label="Fullname" name="fullname" color="white" />
        <InputForm label="Username" name="username" color="white" />
        <InputForm label="Active Email" name="email" color="white" />
        <InputForm
          label="Password"
          name="password"
          color="white"
          type="password"
        />
        <InputForm
          label="Confirm Password"
          name="confirmPassword"
          color="white"
          type="password"
        />
        {error?.response?.data?.message && (
          <div className="flex gap-1 items-center pt-1">
            <LuInfo className="w-2 h-2 text-red-700" />
            <span className="text-xs text-red-700">
              {error?.response?.data?.message}
            </span>
          </div>
        )}
        <Button
          type="submit"
          disabled={isLoading}
          color="white"
          className="mt-3 capitalize flex items-center gap-3 justify-center"
        >
          {isLoading && <Spinner color="blue-gray" />}
          <Typography variant="small" className="font-semibold text-black">
            Sign Up
          </Typography>
        </Button>
      </form>
    </FormProvider>
  );
}
