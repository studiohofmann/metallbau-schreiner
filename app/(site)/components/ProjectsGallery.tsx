import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import SanityImage from "../components/SanityImage";
import Link from "next/link";
import type { PROJECTS_QUERYResult } from "@/sanity/types";

// Extract the type of a single project item
type Project = NonNullable<
  NonNullable<PROJECTS_QUERYResult>["project"]
>[number];

export default async function ProjectsGallery() {
  const projectsData: PROJECTS_QUERYResult = await sanityFetch({
    query: PROJECTS_QUERY,
    revalidate: 60,
  });

  const projects = projectsData?.project || [];

  const gallery = projects.filter((project): project is Project =>
    Boolean(project?.slug?.current && project?.title)
  );

  return (
    <div>
      <div className="gallery">
        {gallery.map((project) => (
          <Link
            href={`/projekte/${project.slug!.current}`}
            key={project.slug!.current}
            className="group"
          >
            <div className="flex flex-col gap-4">
              {project.titleImage && (
                <SanityImage
                  image={project.titleImage}
                  altFallback={project.title ?? "Untitled project"}
                  aspectRatio="aspect-4/3"
                />
              )}
              <div>{project.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
