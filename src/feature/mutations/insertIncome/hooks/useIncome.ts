import React from "react";
import { useForm } from "react-hook-form";

export default function useIncome() {
  const form = useForm();
  return {
    form,
  };
}
