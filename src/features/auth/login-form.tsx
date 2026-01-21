"use client";

import { useLogin } from "@/lib/auth";
import { useSearchParams } from "next/navigation";

type LoginFormProps = {
  onSuccess: () => void;
};
const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin({ onSuccess });

  const searchParams = useSearchParams();
  const redirectTo = searchParams?.get("redirectTo");

  return <div>LoginForm</div>;
};

export default LoginForm;
