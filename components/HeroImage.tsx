import { sanityFetch } from "@/sanity/lib/client";
import { HOME_QUERY } from "@/sanity/lib/queries";
import SanityImage from "./SanityImage";
import type { HOME_QUERYResult } from "@/sanity/types"; // Import the auto-generated type

export default async function HeroImage() {
  const home: HOME_QUERYResult = await sanityFetch({
    query: HOME_QUERY,
    revalidate: 60,
  });

  return (
    <div>
      {home && home.heroImage && (
        <SanityImage
          image={home.heroImage}
          altFallback={home.pageTitleMenu || "Hero image"}
          aspectRatio="aspect-4/3"
          priority={true}
          className="object-cover"
        />
      )}
    </div>
  );
}
