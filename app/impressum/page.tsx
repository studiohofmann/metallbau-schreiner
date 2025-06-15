import { sanityFetch } from "@/sanity/lib/client";
import { DISCLAIMER_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";

export default async function Disclaimer() {
  const disclaimer = await sanityFetch({
    query: DISCLAIMER_QUERY,
    revalidate: 60,
  });

  if (!disclaimer) {
    return <div>No content found.</div>;
  }

  return <PortableText value={disclaimer.introduction ?? []} />;
}
