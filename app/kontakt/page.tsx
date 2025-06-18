import { sanityFetch } from "@/sanity/lib/client";
import { CONTACT_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/Map"), {
  loading: () => <p>Loading map...</p>,
  ssr: !!false,
});

export default async function Contact() {
  const contact = await sanityFetch({
    query: CONTACT_QUERY,
    revalidate: 60,
  });

  if (!contact) {
    return <div>No content found.</div>;
  }

  return (
    <div className="page">
      <PortableText value={contact.text ?? []} />
      <div className="h-96 w-full" id="map">
        <DynamicMap />
      </div>
    </div>
  );
}
