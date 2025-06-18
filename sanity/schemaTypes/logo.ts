import { defineField } from "sanity";
import { AsteriskIcon } from "@sanity/icons";

const logo = {
  name: "logo",
  title: "Logo",
  type: "document",
  icon: AsteriskIcon,

  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
};

export default logo;
