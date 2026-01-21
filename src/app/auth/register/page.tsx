import { paths } from "@/config/paths";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const RegisterPage = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const redirectTo = searchParams?.get("redirectTo");

  return (
    <RegisterForm
      onSuccess={() =>
        router.replace(
          `${redirectTo ? `${decodeURIComponent(redirectTo)}` : paths.auth.login.getHref()}`,
        )
      }
    />
  );
};

export default RegisterPage;
