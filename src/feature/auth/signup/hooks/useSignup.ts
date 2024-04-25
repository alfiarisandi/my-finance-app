import { SignUp } from "@/shared/api/mutation/auth";
import useMutationHook from "@/shared/api/useMutationHook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";
import NProgress from "nprogress";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

export default function useSignup() {
  const router = useRouter();

  const signUpSchema = z
    .object({
      fullname: z.string().nonempty("Fullname is required."),
      username: z.string().nonempty("Username is required."),
      email: z.string().email("Email active is required."),
      password: z.string().nonempty("Password is required."),
      confirmPassword: z.string().nonempty("Confirm password is required."),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: "custom",
          message: "The password did not match.",
          path: ["confirmPassword"],
        });
      }
    });

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const handleSignIn = () => {
    NProgress.start();
    router.replace("/auth/login");
  };

  const mutationQuery = useMutationHook({
    api: SignUp,
    options: {
      onError: (error: any) => {
        toast.error(error?.response?.data?.message);
      },
      onSuccess: async (res: any) => {
        if (res?.status === 200) {
          toast.success("Activation your account.");
          nProgress.start();
          router.replace(`/auth/${res?.data?.uuid}/activation`);
        }
      },
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    await mutationQuery.mutate(values);
  };

  return {
    form,
    handleSignIn,
    onSubmit,
    mutationQuery,
  };
}
