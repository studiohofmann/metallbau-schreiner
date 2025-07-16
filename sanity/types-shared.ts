export type SanityImageType = {
  _type?: "image"; // ← Now optional
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    internalGroqTypeReferenceTo?: "sanity.imageAsset";
  } | null;
  alt?: string | null;
  [key: string]: unknown; // Allow crop/hotspot/etc.
} | null;
