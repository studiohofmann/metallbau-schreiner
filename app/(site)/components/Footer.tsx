import { sanityFetch } from "@/sanity/lib/client";
import { CONTACT_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import type { CONTACT_QUERYResult } from "@/sanity/types"; // Import the auto-generated type

export default async function Footer() {
  const contact: CONTACT_QUERYResult = await sanityFetch({
    query: CONTACT_QUERY,
    revalidate: 60,
  });

  return (
    <div className="mb-22 md:mb-4 text-zinc-800 text-sm">
      <div className="line mb-8 mx-0" />
      <div className="flex justify-between items-end">
        <div>{contact && <PortableText value={contact.address ?? []} />}</div>
        <div>All rights reserved &copy; {new Date().getFullYear()}</div>
      </div>
    </div>
  );
}
