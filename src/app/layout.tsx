"use client";
import { ThemeProvider } from "@/shared/component/materialUi";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import LayoutComponent from "@/shared/component/Layout";
import { Montserrat } from "next/font/google";
import {
  Hydrate,
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import customTheme from "@/shared/component/styles";
import NextTopLoader from "nextjs-toploader";
import nProgress from "nprogress";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // staleTime: 60 * 1000, // 1m
            retry: false, // Will retry failed requests 3 times before displaying an error
          },
        },
        mutationCache: new MutationCache({
          onError: (err) => {
            console.log(err);
          },
        }),
      })
  );

  const onLogout = () => {
    const cookies = Cookies.get();
    for (const cookie in cookies) {
      Cookies.remove(cookie);
    }
    toast.success("Logout successfuly.");
    nProgress.start();
    router.push("/auth/login");
  };

  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={customTheme}>
          <body>
            <NextTopLoader
              color="#1565c0"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
            />
            <LayoutComponent onLogout={onLogout}>{children}</LayoutComponent>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              draggable
              pauseOnHover={false}
              theme="dark"
              style={{ zIndex: 10000 }}
            />
          </body>
        </ThemeProvider>
      </QueryClientProvider>
    </html>
  );
}
