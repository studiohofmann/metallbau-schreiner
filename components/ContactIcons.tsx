import { sanityFetch } from "@/sanity/lib/client";
import { CONTACT_QUERY } from "@/sanity/lib/queries";
import { PhoneFilled, MailFilled } from "@ant-design/icons";

export default async function ContactIcons() {
  const contact = await sanityFetch({
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
