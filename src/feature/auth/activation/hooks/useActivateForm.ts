import { ActivationAccount, ResendCode } from "@/shared/api/mutation/auth";
import useMutationHook from "@/shared/api/useMutationHook";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";
import React from "react";
import { toast } from "react-toastify";

export default function useActivateForm({
  resendDuration,
}: {
  resendDuration: () => void;
}) {
  const router = useRouter();

  const mutationActivation = useMutationHook({
    api: ActivationAccount,
    options: {
      onError: (error: any) => {
        toast.error(error?.response?.data?.message);
      },
      onSuccess: async (res: any) => {
        if (res?.status === 200) {
          toast.success("Activation account success please login.");
          nProgress.start();
          router.replace("/auth/login");
        }
      },
    },
  });

  const mutationResendCode = useMutationHook({
    api: ResendCode,
    options: {
      onError: (error: any) => {
        toast.error(error?.response?.data?.message);
      },
      onSuccess: async (res: any) => {
        toast.success("Resend code successfully check your email.");
        resendDuration();
      },
    },
  });

  return {
    mutationActivation,
    mutationResendCode,
  };
}
