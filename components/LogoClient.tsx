// LogoClient.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PortableText, PortableTextComponents } from "next-sanity";
import type { LOGO_QUERYResult } from "@/sanity/types";

interface LogoClientProps {
  logoData: LOGO_QUERYResult;
}

export default function LogoClient({ logoData }: LogoClientProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const components: PortableTextComponents = {
    marks: {},
    block: {
      normal: ({ children }) => (
        <p style={{ whiteSpace: "pre-wrap" }}>{children}</p>
      ),
    },
  };

  return (
    <Link
      href="/"
      className={`flex items-center ${
        isHome ? "text-zinc-400" : "text-zinc-500 hover:text-zinc-400"
      }`}
    >
      <PortableText value={logoData?.logo ?? []} components={components} />
    </Link>
  );
}
