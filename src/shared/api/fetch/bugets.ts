import {
  FETCH_ANGGARAN_BYMONTH,
  FETCH_DASHBOARD,
} from "@/shared/constants/endpoint";
import AxiosInstance from "../axiosInstance";
import Cookies from "js-cookie";

type apiFn = () => Promise<any>;

type Props = {
  key: string[];
  api: apiFn;
};

const fetchBugetByMonth = (): Props => {
  return {
    key: ["BUGETBYMONTH", "QUERY"],
    api: async () => {
      const res = await AxiosInstance.get(FETCH_ANGGARAN_BYMONTH(), {
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

export { fetchBugetByMonth };
