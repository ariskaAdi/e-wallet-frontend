"use client";
import CardComponent from "@/components/ui/card/card-component";
import { useFetchMyWallet } from "../../action";
import { formatDate } from "@/lib/utils";

export default function UserCard() {
  const { data: wallet, isLoading } = useFetchMyWallet();
  return (
    <CardComponent title="Wallet Card Account">
      {/* Card preview */}
      <div className="bg-linear-to-br from-teal-500 to-teal-700 rounded-xl p-6 text-white mb-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8" />

        {isLoading ? (
          <div>
            <div className="w-8 h-8 animate-spin text-blue-500" />
          </div>
        ) : (
          <>
            <div className="relative z-10">
              <p className="text-xs opacity-75 mb-8">
                Name on Card : {wallet?.name}
              </p>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-6 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">💳</span>
                </div>
                <span className="text-sm font-semibold">Wallet Public ID</span>
              </div>

              <p className="text-lg font-mono tracking-widest mb-6">
                {wallet?.wallet_public_id}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs opacity-75">Created At</p>
                  <p className="text-sm font-mono">
                    {formatDate(wallet?.created_at?.toString() || "")}
                  </p>
                </div>
                {/* <div className="w-12 h-8 bg-linear-to-br from-yellow-300 to-orange-400 rounded">
              <span className="text-xs font-bold text-white">VISA</span>
            </div> */}
              </div>
            </div>
          </>
        )}
      </div>
    </CardComponent>
  );
}
