import { sanityFetch } from "@/sanity/lib/client";
import { NAVIGATION_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

export default async function Navigation() {
  const menuItems = await sanityFetch({
    query: NAVIGATION_QUERY,
    revalidate: 60,
  });

  return (
    <nav>
      <ul className="flex space-x-8">
        {menuItems
          .filter((item) => item.slug && item.slug.current)
          .map((item) => (
            <li key={item.slug!.current}>
              <Link href={`/${item.slug?.current}`}>{item.pageTitleMenu}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
