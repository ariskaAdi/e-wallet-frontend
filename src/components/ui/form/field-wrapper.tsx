import React from "react";
import { FieldError } from "react-hook-form";
import { Error } from "./error";
import { Label } from "./label";

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  "className" | "children"
>;

const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, className, children, error } = props;
  return (
    <div>
      <Label>
        {label}
        <div className="mt-1">{children}</div>
      </Label>
      <Error errorMessage={error?.message} />
    </div>
  );
};

export default FieldWrapper;
