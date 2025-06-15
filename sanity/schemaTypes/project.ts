import { defineField } from "sanity";
import { AddIcon } from "@sanity/icons";

const project = {
  name: "project",
  title: "Project",
  type: "document",
  icon: AddIcon,

  fields: [
    defineField({
      name: "title",
      title: "Title",
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
      options: { source: "title" },
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
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
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
      description: "Upload and manage multiple images as a gallery",
    }),
  ],
};

export default project;
