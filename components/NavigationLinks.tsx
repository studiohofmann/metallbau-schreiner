// NavigationLinks.jsx (Client Component)
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NAVIGATION_QUERYResult } from "@/sanity/types"; // Import your generated type

// Use the stricter type for filtered items
type MenuItem = {
  slug: { current: string };
  pageTitleMenu: string;
};

interface NavigationLinksProps {
  menuItems: MenuItem[];
}

export default function NavigationLinks({ menuItems }: NavigationLinksProps) {
  const pathname = usePathname();

  return (
    <ul className="grid grid-cols-4 md:flex md:gap-4">
      {menuItems.map((item) => {
        const href = `/${item.slug.current}`;
        const isActive =
          pathname === href ||
          (pathname.startsWith(`${href}/`) && href !== "/");

        return (
          <li key={item.slug.current}>
            <Link
              className={`flex justify-center items-center py-4 md:py-0 
                         ${isActive ? "text-zinc-400" : "text-zinc-500 hover:text-zinc-400"}`}
              href={href}
            >
              {item.pageTitleMenu}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
