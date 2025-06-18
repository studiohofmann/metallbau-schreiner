import { sanityFetch } from "@/sanity/lib/client";
import { NAVIGATION_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { LineOutlined } from "@ant-design/icons";

export default async function Navigation() {
  const menuItems = await sanityFetch({
    query: NAVIGATION_QUERY,
    revalidate: 60,
  });

  return (
    <nav>
      <ul className="grid grid-cols-4 md:flex md:gap-4">
        {menuItems
          .filter((item) => item.slug && item.slug.current)
          .map((item) => (
            <li key={item.slug!.current}>
              <Link
                className="flex justify-center items-center py-4 md:py-0"
                href={`/${item.slug?.current}`}
              >
                {item.pageTitleMenu}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
