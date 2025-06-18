// LogoClient.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PortableText, PortableTextComponents } from "next-sanity";

interface LogoClientProps {
  logoData: any; // Replace 'any' with a more specific type if available
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
          className={isHome ? "text-zinc-400" : "text-zinc-500"}
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
