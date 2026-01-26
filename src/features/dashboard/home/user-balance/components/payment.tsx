import DialogTransaction from "@/components/ui/dialog/dialog-transaction";
import Input from "@/components/ui/form/input-";
import Label from "@/components/ui/form/label";
import { Handshake } from "lucide-react";
import React from "react";

const Payment = () => {
  return (
    <>
      <DialogTransaction
        trigger={<Handshake size={20} className="text-amber-600" />}
        title="Payment"
        description="Payment Transaction"
        submit={() => console.log("submit")}>
        <div className="grid gap-3">
          <Label htmlFor="name-1">Name</Label>
          <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="username-1">Username</Label>
          <Input id="username-1" name="username" defaultValue="@peduarte" />
        </div>
      </DialogTransaction>
    </>
  );
};

export default Payment;
