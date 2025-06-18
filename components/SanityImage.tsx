import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { Home } from "@/sanity/types"; // Import your generated types

// Use the image type from your schema (they are the same structure)
type SanityImageType = NonNullable<Home["heroImage"]>;
// Or, if you want to support both Home and Project images, you could use:
// type SanityImageType = NonNullable<Project["titleImage"]>;

interface SanityImageProps {
  image: SanityImageType;
  altFallback?: string;
  aspectRatio?: string;
  priority?: boolean;
  className?: string;
}

export default function SanityImage({
  image,
  altFallback = "Image",
  aspectRatio = "aspect-4/3",
  priority = false,
  className = "object-cover",
}: SanityImageProps) {
  if (!image || !image.asset) {
    return null;
  }

  return (
    <div className={`relative w-full h-full ${aspectRatio}`}>
      <Image
        src={urlFor(image).url()}
        alt={image.alt || altFallback}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={80}
        priority={priority}
        placeholder="blur"
        blurDataURL={urlFor(image).width(24).height(24).blur(10).url()}
        className={className}
      />
    </div>
  );
}
