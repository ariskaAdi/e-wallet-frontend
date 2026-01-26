import { envVars } from "@/config/env";
import { MyWalletResponse } from "@/types/api";
import axios from "axios";

export const fetchMyWallet = async () => {
  const response = await axios.get<MyWalletResponse>(
    `${envVars.API_URL}/wallet/my-wallet`,
    {
      withCredentials: true,
    },
  );

  console.log(response.data);
  return response.data.payload;
};
