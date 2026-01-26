import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "../button/button";

interface DialogTransactionProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  trigger: React.ReactNode;
  submit: (event: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  description: string;
}

const DialogTransaction = ({
  trigger,
  title,
  description,
  submit: on,
  children,
}: DialogTransactionProps) => {
  return (
    <div className="flex flex-col items-center gap-2 p-3 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
      <Dialog>
        <form onSubmit={on}>
          <DialogTrigger asChild>{trigger}</DialogTrigger>
          <DialogContent className="sm:max-w-106.25">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">{children}</div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Proccess</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
        {title}
      </span>
    </div>
  );
};

export default DialogTransaction;
