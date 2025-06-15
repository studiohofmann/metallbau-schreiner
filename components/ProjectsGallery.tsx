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
  const gallery: Project[] = await sanityFetch({
    query: PROJECTS_GALLERY_QUERY,
    revalidate: 60,
  });

  if (!gallery || gallery.length === 0) {
    return <div>No projects found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((project: Project) => (
          <Link
            href={`/projekte/${project.slug.current}`}
            key={project.slug.current}
            className="group"
          >
            <div>
              {project.titleImage && (
                <SanityImage
                  image={project.titleImage}
                  altFallback={project.title}
                  aspectRatio="aspect-4/3"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-medium">{project.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
