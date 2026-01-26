"use client";

import CardComponent from "@/components/ui/card/card-component";
import RealTimeClock from "@/components/ui/clock";

import { useFetchMyWallet } from "../../action";
import { formatCurrency } from "@/lib/utils";
import Payment from "./components/payment";
import { Topup } from "./components/top-up";
import Transfer from "./components/transfer";

export default function UserBalance() {
  const { data: wallet, isLoading } = useFetchMyWallet();
  return (
    <CardComponent title="Your Total Balance">
      <div className="mb-6">
        {isLoading ? (
          <div className="w-8 h-8 animate-spin text-blue-500" />
        ) : (
          <p className="text-4xl font-bold text-teal-600 mb-2">
            {formatCurrency(wallet?.balance || 0)}
          </p>
        )}
        <RealTimeClock />
      </div>

      {/* action component */}
      <div className="grid grid-cols-3 gap-3">
        <Transfer />
        <Topup />
        <Payment />
      </div>
    </CardComponent>
  );
}
