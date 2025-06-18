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

  return (
    <div className="mt-22 mb-8">
      <div className="flex flex-col gap-8 xl:flex-row">
        <div className="xl:basis-1/2">
          <PortableText value={disclaimer.legal ?? []} />
        </div>
        <div className="xl:basis-1/2">
          <PortableText value={disclaimer.disclaimer ?? []} />
        </div>
      </div>
    </div>
  );
}
