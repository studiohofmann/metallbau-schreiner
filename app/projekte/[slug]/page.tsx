import { sanityFetch } from "@/sanity/lib/client";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import SanityImage from "@/components/SanityImage";
import { PortableText } from "@portabletext/react";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = await sanityFetch({
    query: PROJECT_QUERY,
    params: { slug },
    revalidate: 60,
  });

  if (!project) {
    return <div>Projekt nicht gefunden.</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      {project.titleImage && (
        <SanityImage
          image={project.titleImage}
          altFallback={project.title ?? undefined}
        />
      )}
      <PortableText value={project.text ?? []} />
      {project.gallery && project.gallery.length > 0 && (
        <div className="gallery">
          {project.gallery.map((imageItem, index) => (
            <SanityImage
              key={index}
              image={imageItem}
              altFallback={`Gallery image ${index + 1}`}
              aspectRatio="aspect-[4/3]"
              className="object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
}
