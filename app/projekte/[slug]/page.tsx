import { sanityFetch } from "@/sanity/lib/client";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import SanityImage from "@/components/SanityImage";
import { PortableText } from "@portabletext/react";
import type { PROJECT_QUERYResult } from "@/sanity/types"; // Import the auto-generated type

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project: PROJECT_QUERYResult = await sanityFetch({
    query: PROJECT_QUERY,
    params: { slug },
    revalidate: 60,
  });

  if (!project) {
    return <div>Projekt nicht gefunden.</div>;
  }

  return (
    <div className="page">
      <h1>{project.title}</h1>
      <div className="flex flex-col gap-8 md:flex-row">
        {project.titleImage && (
          <div className="md:basis-1/2">
            <SanityImage
              image={project.titleImage}
              altFallback={project.title ?? undefined}
            />
          </div>
        )}

        <div className="md:basis-1/2">
          <PortableText value={project.text ?? []} />
        </div>
      </div>
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
