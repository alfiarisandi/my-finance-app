import { AUTH, SIGN_IN, SIGN_UP } from "@/shared/constants/endpoint";
import AxiosInstance from "../axiosInstance";

interface User {
  // firstName: string;
  // lastName: string;
  password: string;
  username: string;
  // email: string;
  // avatar: string;
}

interface UserSignUp {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface ActivationCode {
  uuid: string;
  code_verification: string;
}

const SignIn = async (data: { username: string; password: string }) => {
  const body: User = {
    password: btoa(data.password),
    username: data.username,
  };
  const res = await AxiosInstance.post(AUTH("/login"), {
    username: body.username,
    password: body.password,
  });
  return res?.data;
};

const SignUp = async (data: UserSignUp) => {
  const body: UserSignUp = {
    fullname: data.fullname,
    username: data.username,
    email: data.email,
    password: btoa(data.password),
  };
  const res = await AxiosInstance.post(AUTH("/register"), body);
  return res?.data;
};

const ActivationAccount = async (data: ActivationCode) => {
  const body: ActivationCode = data;
  const res = await AxiosInstance.post(AUTH("/activation"), body);
  return res?.data;
};

const ResendCode = async (uuid: string) => {
  const body = {
    uuid: uuid,
  };
  const res = await AxiosInstance.post(AUTH("/resend-activation-code"), body);
  return res?.data;
};

export { SignIn, SignUp, ActivationAccount, ResendCode };
