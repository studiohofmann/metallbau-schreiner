import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_GALLERY_QUERY } from "@/sanity/lib/queries";
import SanityImage from "@/components/SanityImage";
import Link from "next/link";
import type { PROJECTS_GALLERY_QUERYResult } from "@/sanity/types"; // Import the generated type

export default async function ProjectsPage() {
  const rawGallery: PROJECTS_GALLERY_QUERYResult = await sanityFetch({
    query: PROJECTS_GALLERY_QUERY,
    revalidate: 60,
  });

  // Filter for valid projects (with slug and title)
  const gallery = rawGallery.filter(
    (project) => project.slug?.current && project.title
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
                  altFallback={project.title!}
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
