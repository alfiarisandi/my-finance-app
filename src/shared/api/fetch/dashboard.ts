import { FETCH_DASHBOARD } from "@/shared/constants/endpoint";
import AxiosInstance from "../axiosInstance";
import Cookies from "js-cookie";

type apiFn = () => Promise<any>;

type Props = {
  key: string[];
  api: apiFn;
};

const fetchDashboard = (): Props => {
  return {
    key: ["DASHBOARD", "QUERY"],
    api: async () => {
      const res = await AxiosInstance.get(FETCH_DASHBOARD(), {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      if (!res) {
        throw new Error("Something wrong");
      }

      return res?.data;
    },
  };
};

export { fetchDashboard };
