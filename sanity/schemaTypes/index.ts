import { type SchemaTypeDefinition } from "sanity";
import home from "./home";
import projects from "./projects";
import about from "./about";
import contact from "./contact";
import disclaimer from "./disclaimer";
import logo from "./logo";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, projects, about, contact, disclaimer, logo],
};
