import { sanityFetch } from "@/sanity/lib/client";
import { CONTACT_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";

export default async function Contact() {
  const contact = await sanityFetch({
    query: CONTACT_QUERY,
    revalidate: 60,
  });

  if (!contact) {
    return <div>No content found.</div>;
  }

  return <PortableText value={contact.introduction ?? []} />;
}
