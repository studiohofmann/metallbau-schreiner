import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface SanityImageProps {
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      internalGroqTypeReferenceTo?: "sanity.imageAsset";
    } | null;
    alt?: string | null;
    _type: "image";
    [key: string]: unknown; // allow extra fields like crop, hotspot, etc.
  } | null;
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
  // Defensive check — ensures image and image.asset are valid
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
