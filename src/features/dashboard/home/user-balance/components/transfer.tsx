import DialogTransaction from "@/components/ui/dialog/dialog-transaction";
import Input from "@/components/ui/form/input-";
import Label from "@/components/ui/form/label";
import { Send } from "lucide-react";
import React from "react";

const Transfer = () => {
  return (
    <>
      <DialogTransaction
        trigger={<Send size={20} className="text-teal-600" />}
        title="Transfer"
        description="Transfer Saldo"
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

export default Transfer;
