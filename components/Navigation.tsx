import { sanityFetch } from "@/sanity/lib/client";
import { NAVIGATION_QUERY } from "@/sanity/lib/queries";
import NavigationLinks from "./NavigationLinks";

export default async function Navigation() {
  const menuItems = await sanityFetch({
    query: NAVIGATION_QUERY,
    revalidate: 60,
  });

  return (
    <nav>
      <NavigationLinks menuItems={menuItems} />
    </nav>
  );
}
