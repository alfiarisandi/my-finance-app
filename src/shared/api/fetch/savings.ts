import { FETCH_TABUNGAN } from "@/shared/constants/endpoint";
import AxiosInstance from "../axiosInstance";
import Cookies from "js-cookie";

type apiFn = () => Promise<any>;

type Props = {
  key: string[];
  api: apiFn;
};

const fetchAllSavings = (): Props => {
  return {
    key: ["ALLSAVINGS", "QUERY"],
    api: async () => {
      const res = await AxiosInstance.get(FETCH_TABUNGAN, {
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

export { fetchAllSavings };
