import { type SchemaTypeDefinition } from "sanity";
import home from "./home";
import projects from "./projects";
import project from "./project";
import about from "./about";
import contact from "./contact";
import disclaimer from "./disclaimer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, projects, project, about, contact, disclaimer],
};
