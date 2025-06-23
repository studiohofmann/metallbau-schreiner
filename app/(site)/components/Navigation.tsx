import NavigationLinks from "./NavigationLinks";
import { sanityFetch } from "@/sanity/lib/client";
import { NAVIGATION_QUERY } from "@/sanity/lib/queries";
import type { NAVIGATION_QUERYResult } from "@/sanity/types";

export default async function Navigation() {
  const menuItemsRaw: NAVIGATION_QUERYResult = await sanityFetch({
    query: NAVIGATION_QUERY,
    revalidate: 60,
  });

  // Filter out items where slug is null
  const menuItems = menuItemsRaw.filter(
    (
      item
    ): item is typeof item & {
      slug: { current: string };
      pageTitleMenu: string;
    } => !!item.slug && !!item.slug.current && !!item.pageTitleMenu
  );

  return <NavigationLinks menuItems={menuItems} />;
}
