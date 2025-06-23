import { sanityFetch } from "@/sanity/lib/client";
import { ABOUT_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import SanityImage from "../components/SanityImage";
import type { ABOUT_QUERYResult } from "@/sanity/types"; // 1. Import the type

export default async function About() {
  const about: ABOUT_QUERYResult = await sanityFetch({
    query: ABOUT_QUERY,
    revalidate: 60,
  }); // 2. Type the result

  if (!about) {
    return <div>No content found.</div>;
  }

  return (
    <div className="page">
      <div className="flex flex-col gap-8 xl:flex-row">
        {about.image && (
          <div className="xl:basis-1/2">
            <SanityImage
              image={about.image}
              altFallback={about.pageTitleMenu || "Hero image"}
              aspectRatio="aspect-4/3"
              priority={true}
              className="object-cover"
            />
          </div>
        )}
        <div className="xl:basis-1/2">
          <PortableText value={about.text ?? []} />
        </div>
      </div>
    </div>
  );
}
