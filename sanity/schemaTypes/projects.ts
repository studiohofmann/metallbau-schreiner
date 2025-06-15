import { defineField } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

const projects = {
  name: "projects",
  title: "Projects",
  type: "document",
  icon: ProjectsIcon,

  fields: [
    defineField({
      name: "pageTitleMenu",
      title: "Page Title / Menu",
      type: "string",
    }),
    defineField({
      name: "sortOrder",
      title: "Menu Sort Order",
      type: "number",
      description:
        "Controls the position in the menu (higher numbers appear later)",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the menu",
      options: { source: "pageTitleMenu" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "introduction",
      title: "Introduction",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
};

export default projects;
