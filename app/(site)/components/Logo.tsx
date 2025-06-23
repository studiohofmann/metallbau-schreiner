import { sanityFetch } from "@/sanity/lib/client";
import { LOGO_QUERY } from "@/sanity/lib/queries";
import LogoClient from "./LogoClient";
import type { LOGO_QUERYResult } from "@/sanity/types";

export default async function Logo() {
  const logo: LOGO_QUERYResult = await sanityFetch({
    query: LOGO_QUERY,
    revalidate: 60,
  });

  if (!logo) {
    return null;
  }

  return <LogoClient logoData={logo} />;
}
