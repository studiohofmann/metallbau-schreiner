import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import SanityImage from "../../components/SanityImage";
import { PortableText } from "@portabletext/react";
import type { PROJECTS_QUERYResult } from "@/sanity/types"; // Import the auto-generated type

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch the projects data (which contains the project array)
  const projectsData: PROJECTS_QUERYResult = await sanityFetch({
    query: PROJECTS_QUERY,
    revalidate: 60,
  });

  // Find the specific project from the project array using the slug
  const project = projectsData?.project?.find(
    (p: any) => p.slug?.current === slug
  );

  if (!project) {
    return <div>Projekt nicht gefunden.</div>;
  }

  return (
    <div className="page">
      <h2>{project.title}</h2>
      <div className="flex flex-col gap-8 md:flex-row">
        {project.titleImage && (
          <div className="md:basis-1/2">
            <SanityImage
              image={project.titleImage as any}
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
          {project.gallery.map((imageItem: any, index: number) => (
            <SanityImage
              key={index}
              image={imageItem as any}
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
