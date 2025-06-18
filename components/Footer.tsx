import { sanityFetch } from "@/sanity/lib/client";
import { CONTACT_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";

export default async function Footer() {
  const contact = await sanityFetch({
    query: CONTACT_QUERY,
    revalidate: 60,
  });

  return (
    <div className="mb-22 md:mb-4 text-zinc-800">
      <div className="line mb-8 mx-0" />
      <div className="flex justify-between items-end">
        <h3>{contact && <PortableText value={contact.address ?? []} />}</h3>
        <h3>All rights reserved &copy; {new Date().getFullYear()}</h3>
      </div>
    </div>
  );
}
