"use client";

import DialogTransaction from "@/components/ui/dialog/dialog-transaction";
import Input from "@/components/ui/form/input-";
import Label from "@/components/ui/form/label";
import { envVars } from "@/config/env";
import { topupSchema } from "@/lib/validation/topup";
import axios from "axios";

import { BanknoteArrowDown } from "lucide-react";
import React, { useState } from "react";

export const Topup = () => {
  const [amount, setAmount] = useState<number>(0);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const parsed = topupSchema.safeParse({ amount });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }

    setIsPending(true);

    try {
      await axios.post(
        `${envVars.API_URL}/wallet/topup`,
        { amount },
        {
          withCredentials: true,
        },
      );
    } catch (error) {
      console.log(error);
      setError("failed to topup");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <DialogTransaction
        trigger={<BanknoteArrowDown size={20} className="text-blue-600" />}
        title="Top-up"
        description="Top-up Saldo Wallet"
        submit={handleSubmit}>
        <div className="grid gap-3">
          <Label htmlFor="name-1">Amount</Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            onChange={handleAmountChange}
            value={amount}
          />
        </div>
      </DialogTransaction>
    </>
  );
};
