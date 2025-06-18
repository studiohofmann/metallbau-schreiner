import { defineField } from "sanity";
import { InfoOutlineIcon } from "@sanity/icons";

const disclaimer = {
  name: "disclaimer",
  title: "Disclaimer",
  type: "document",
  icon: InfoOutlineIcon,

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
      name: "legal",
      title: "Legal",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "disclaimer",
      title: "Disclaimer",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
};

export default disclaimer;
