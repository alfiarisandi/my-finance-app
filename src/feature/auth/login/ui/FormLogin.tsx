"use client";
import { InputForm } from "@/shared/component/ui/form/InputForm";
import { Button, Spinner, Typography } from "@/shared/component/materialUi";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { LuInfo } from "react-icons/lu";

export default function FormLogin() {
  // const [isLoading, setIsLoading] = useState(false);

  const { form, onSubmit, mutationQuery } = useAuth();
  const { isLoading, isError, error } = mutationQuery;

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="text-white w-full lg:w-[80%] flex flex-col gap-3"
      >
        <InputForm label="Username" name="username" color="white" />
        <InputForm
          label="Password"
          type="password"
          name="password"
          color="white"
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
            Login
          </Typography>
        </Button>
      </form>
    </FormProvider>
  );
}
