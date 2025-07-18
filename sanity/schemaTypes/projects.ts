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
    defineField({
      name: "project",
      title: "Project",
      type: "array",
      of: [
        {
          type: "object",
          name: "projectItem",
          title: "Project Item",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "slug",
              title: "Slug",
              type: "slug",
              description:
                "Add a custom slug for the URL or generate one from the title",
              options: {
                source: "title",
                maxLength: 96,
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "titleImage",
              title: "Title Image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                },
              ],
            }),
            defineField({
              name: "text",
              title: "Project Description",
              type: "array",
              of: [{ type: "block" }],
            }),
            defineField({
              name: "gallery",
              title: "Project Gallery",
              type: "array",
              of: [
                {
                  type: "image",
                  fields: [
                    {
                      name: "alt",
                      type: "string",
                      title: "Alternative Text",
                    },
                  ],
                  options: {
                    hotspot: true,
                  },
                },
              ],
              description: "Upload and manage multiple images for this project",
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "slug.current",
              media: "titleImage",
            },
          },
        },
      ],
      description: "Add multiple projects. Drag to reorder them.",
    }),
  ],
};

export default projects;
