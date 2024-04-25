import { INSERT_OUTCOME } from "@/shared/constants/endpoint";
import AxiosInstance from "../axiosInstance";
import Cookies from "js-cookie";

interface Outcome {
  anggaran_id: string;
  tabungan_id: string;
  nama_pengeluaran: string;
  nilai_pengeluaran: number;
}

const InsertOutcome = async (data: Outcome) => {
  const body: Outcome = { ...data };

  const res = await AxiosInstance.post(INSERT_OUTCOME, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });

  return res?.data;
};

export { InsertOutcome };
