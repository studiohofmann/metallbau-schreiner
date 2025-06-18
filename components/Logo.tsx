import { sanityFetch } from "@/sanity/lib/client";
import { LOGO_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { PortableText, PortableTextComponents } from "next-sanity";

export default async function Logo() {
  const logo = await sanityFetch({
    query: LOGO_QUERY,
    revalidate: 60,
  });
  if (!logo) {
    return null;
  }
  const components: PortableTextComponents = {
    marks: {},
    block: {
      normal: ({ children }) => (
        <p style={{ whiteSpace: "pre-wrap" }}>{children}</p>
      ),
    },
  };
  return (
    <Link href={"/"}>
      {" "}
      <PortableText value={logo.logo ?? []} components={components} />
    </Link>
  );
}
