"use client";
import CardComponent from "@/components/ui/card/card-component";
// import { formatCurrency, formatDate } from "@/lib/utils";

import axios from "axios";
import { BanknoteArrowDown, BanknoteArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function RecentTx() {
  return (
    <CardComponent
      title="Recent Transactions"
      titleClassName="text-lg font-semibold text-slate-900 dark:text-white"
      actions={
        <button className="text-xs px-3 py-1 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded transition-colors">
          Last 7 days
        </button>
      }>
      <div className="space-y-4"></div>
    </CardComponent>
  );
}
