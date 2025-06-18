import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import ProjectsGallery from "@/components/ProjectsGallery";

export default async function Projects() {
  const projects = await sanityFetch({
    query: PROJECTS_QUERY,
    revalidate: 60,
  });

  if (!projects) {
    return <div>No content found.</div>;
  }

  return (
    <div className="page">
      <PortableText value={projects.introduction ?? []} />
      <ProjectsGallery />
    </div>
  );
}
