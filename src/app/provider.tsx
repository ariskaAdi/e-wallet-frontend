"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
type AppProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
