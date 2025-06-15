import { sanityFetch } from "@/sanity/lib/client";
import { CONTACT_QUERY } from "@/sanity/lib/queries";
import { PhoneFilled, MailFilled } from "@ant-design/icons";

export default async function ContactIcons() {
  const contact = await sanityFetch({
    query: CONTACT_QUERY,
    revalidate: 60,
  });
  return (
    <div className="flex space-x-4">
      <a href={`tel:${contact.telephone}`}>
        <PhoneFilled />
      </a>
      <a href={`mailto:${contact.email}`}>
        <MailFilled />
      </a>
    </div>
  );
}
