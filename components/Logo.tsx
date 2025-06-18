import { sanityFetch } from "@/sanity/lib/client";
import { LOGO_QUERY } from "@/sanity/lib/queries";
import LogoClient from "./LogoClient";

export default async function Logo() {
  const logo = await sanityFetch({
    query: LOGO_QUERY,
    revalidate: 60,
  });

  if (!logo) {
    return null;
  }

  return <LogoClient logoData={logo.logo ?? []} />;
}
