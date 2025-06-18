// LogoClient.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PortableText, PortableTextComponents } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";

// Define proper type for logoData
interface LogoClientProps {
  logoData: PortableTextBlock[];
}

export default function LogoClient({ logoData }: LogoClientProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const components: PortableTextComponents = {
    marks: {},
    block: {
      normal: ({ children }) => (
        <p
          style={{ whiteSpace: "pre-wrap" }}
          className={
            isHome ? "text-zinc-400" : "text-zinc-500 hover:text-zinc-400"
          }
        >
          {children}
        </p>
      ),
    },
  };

  return (
    <Link href="/" className={isHome ? "active-logo" : ""}>
      <PortableText value={logoData} components={components} />
    </Link>
  );
}
