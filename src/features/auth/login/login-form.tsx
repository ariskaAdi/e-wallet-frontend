"use client";

import React, { useState } from "react";
import AuthLayout from "../auth-layout";
import Link from "next/link";
import InputForm from "@/components/ui/form/form";
import InputPassword from "@/components/ui/form/form-password";
import { Button } from "@/components/ui/button/button";
import axios from "axios";
import { envVars } from "@/config/env";
import { loginSchema } from "@/lib/validation/auth";
import { useRouter } from "next/navigation";
import { FormLoginData } from "@/types/api";

const Login = () => {
  const [formData, setFormData] = useState<FormLoginData>({
    email: "",
    password: "",
  });

  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const parsed = loginSchema.safeParse(formData);
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }

    setIsPending(true);

    try {
      await axios.post(`${envVars.API_URL}/auth/login`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      setError("Invalid email or password");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <AuthLayout
      title="Login"
      footer={
        <>
          Don’t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-blue-500 hover:underline ml-1">
            Sign up
          </Link>
        </>
      }>
      {/* ERROR MESSSAGE */}
      {error && <p className="mb-3 text-red-500 text-center">{error}</p>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Email */}
        <InputForm
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          type="email">
          Email
        </InputForm>

        {/* Password */}
        <InputPassword
          id="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleInputChange}
          type="password">
          Password
        </InputPassword>

        {/* Submit */}
        <Button type="submit" className="w-full cursor-pointer">
          {isPending ? "Loading..." : "Login"}
        </Button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-2 my-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-sm text-gray-500">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* <LoginGoogle /> */}
    </AuthLayout>
  );
};

export default Login;
