import { sanityFetch } from "@/sanity/lib/client";
import { HOME_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import HeroImage from "../(site)/components/HeroImage"; // Adjust the import path as necessary
import type { HOME_QUERYResult } from "@/sanity/types"; // Import the auto-generated type

export default async function Home() {
  const home: HOME_QUERYResult = await sanityFetch({
    query: HOME_QUERY,
    revalidate: 60,
  });

  if (!home) {
    return <div>No content found.</div>;
  }

  return (
    <div className="page">
      <div className="flex flex-col gap-8 xl:flex-row">
        <div className="xl:basis-1/2">
          <HeroImage />
        </div>
        <div className="xl:basis-1/2">
          <PortableText value={home.introduction ?? []} />
        </div>
      </div>
    </div>
  );
}
