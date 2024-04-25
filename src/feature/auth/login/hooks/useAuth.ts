import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useMutationHook from "@/shared/api/useMutationHook";
import { SignIn } from "@/shared/api/mutation/auth";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";

export default function useAuth() {
  const router = useRouter();

  const formSignInSchema = z.object({
    username: z.string().nonempty({ message: "Username is required." }),
    password: z
      .string({ required_error: "Password is required." })
      .min(8, { message: "Password must be 5 or more characters long." }),
  });

  const form = useForm<z.infer<typeof formSignInSchema>>({
    resolver: zodResolver(formSignInSchema),
  });

  const handleSignUp = () => {
    NProgress.start();
    router.push("../auth/signup");
  };

  const mutationQuery = useMutationHook({
    api: SignIn,
    options: {
      onError: (error: any) => {
        toast.error(error?.response?.data?.message);
      },
      onSuccess: async (res: any) => {
        if (res?.status === 200) {
          toast.success("Sign in successfully.");
          Cookies.set("token", res?.token);
          Cookies.set("username", res?.data.username);
          Cookies.set("fullname", res?.data.fullname);
          Cookies.set("email", res?.data.email);
          Cookies.set("img", res?.data.img_name);

          NProgress.start();

          router.replace("/");
        }
      },
    },
  });

  const onSubmit = async (values: z.infer<typeof formSignInSchema>) => {
    await mutationQuery.mutate(values);
  };
  return {
    form,
    onSubmit,
    mutationQuery,
    handleSignUp,
  };
}
