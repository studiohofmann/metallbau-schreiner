import { sanityFetch } from "@/sanity/lib/client";
import { CONTACT_QUERY } from "@/sanity/lib/queries";
import { MailFilled } from "@ant-design/icons";
import type { CONTACT_QUERYResult } from "@/sanity/types"; // Import the type

export default async function ContactIcons() {
  const contact: CONTACT_QUERYResult = await sanityFetch({
    query: CONTACT_QUERY,
    revalidate: 60,
  });
  if (!contact) {
    return null;
  }
  return (
    <div className="flex items-center justify-center">
      <a href={`mailto:${contact.email}`}>
        <MailFilled className="text-base" />
      </a>
    </div>
  );
}
