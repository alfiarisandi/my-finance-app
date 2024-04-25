import React, { FormEvent, useCallback, useEffect, useState } from "react";
import useActivateForm from "./useActivateForm";

export default function useInputHandler(userId: string) {
  const [code, setCode] = useState<string>("");
  const [resendDuration, setResendDuration] = useState(0);

  const { mutationActivation, mutationResendCode } = useActivateForm({
    resendDuration: () => setResendDuration(60),
  });
  const { isLoading: isLoadActivation, error: errorActivation } =
    mutationActivation;
  const {
    isLoading: isLoadResend,
    error: errorResend,
    data,
  } = mutationResendCode;

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const values = (e.target as HTMLInputElement).value;

    if (values.length === 6) {
      setCode(values);

      setTimeout(async () => {
        await mutationActivation.mutate({
          uuid: userId,
          code_verification: values,
        });
      }, 500);
    } else if (values.length <= 6) {
      setCode(values);
    }
  };

  const handleResendCode = async () => {
    await mutationResendCode.mutate(userId);
    // setResendDuration(30);
  };

  const timerCallBack = useCallback(() => {
    if (resendDuration > 0) {
      setResendDuration((prev) => prev - 1);
    }
  }, [resendDuration]);

  useEffect(() => {
    const timer = setInterval(timerCallBack, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [resendDuration]);

  return {
    code,
    handleChange,
    handleResendCode,
    isLoadActivation,
    isLoadResend,
    resendDuration,
    errorActivation,
  };
}
