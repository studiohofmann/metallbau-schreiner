import { sanityFetch } from "@/sanity/lib/client";
import { ABOUT_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";

export default async function About() {
  const about = await sanityFetch({
    query: ABOUT_QUERY,
    revalidate: 60,
  });

  if (!about) {
    return <div>No content found.</div>;
  }

  return <PortableText value={about.introduction ?? []} />;
}
