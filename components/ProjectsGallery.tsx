import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_GALLERY_QUERY } from "@/sanity/lib/queries";
import SanityImage from "@/components/SanityImage";
import Link from "next/link";

// Define the Project type based on the fields you use
interface Project {
  slug: { current: string };
  title: string;
  titleImage?: any; // Replace 'any' with the correct type if available
}

// Update the function to use the Project[] type
export default async function ProjectsPage() {
  const rawGallery = await sanityFetch({
    query: PROJECTS_GALLERY_QUERY,
    revalidate: 60,
  });

  // Filter and map to ensure slug and title are not null
  const gallery: Project[] = (rawGallery as any[])
    .filter((project) => project.slug && project.slug.current && project.title)
    .map((project) => ({
      slug: { current: project.slug.current },
      title: project.title,
      titleImage: project.titleImage,
    }));

  return (
    <div>
      <div className="gallery">
        {gallery.map((project: Project) => (
          <Link
            href={`/projekte/${project.slug.current}`}
            key={project.slug.current}
            className="group"
          >
            <div className="flex flex-col gap-4">
              {project.titleImage && (
                <SanityImage
                  image={project.titleImage}
                  altFallback={project.title}
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
