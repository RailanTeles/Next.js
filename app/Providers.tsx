// Providers.tsx
"use client"; // Este componente precisa ser client-side para utilizar o AuthProvider

import { AuthProvider } from "./Context/AuthContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
