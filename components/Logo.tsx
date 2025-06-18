import { sanityFetch } from "@/sanity/lib/client";
import { LOGO_QUERY } from "@/sanity/lib/queries";
import LogoClient from "./LogoClient";
import type { LOGO_QUERYResult } from "@/sanity/types"; // 1. Import the auto-generated type

export default async function Logo() {
  // 2. Apply the specific type to your fetched data
  const logo: LOGO_QUERYResult = await sanityFetch({
    query: LOGO_QUERY,
    revalidate: 60,
  });

  if (!logo) {
    return null;
  }

  return (
    <LogoClient
      logoData={(logo.logo ?? []).map((block: any) => ({
        ...block,
        children: block.children ?? [],
      }))}
    />
  );
}
