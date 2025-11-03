"use client";

import { usePathname } from "next/navigation";
import { Topbar } from "@/components/header";

export function ConditionalTopbar() {
  const pathname = usePathname();

  // Não mostrar na página inicial
  if (pathname === "/") {
    return null;
  }

  return <Topbar />;
}
