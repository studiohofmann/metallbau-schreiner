import { defineQuery } from "next-sanity";

export const NAVIGATION_QUERY = defineQuery(
  `*[_type in ["projects", "about", "contact", "disclaimer"]] | order(sortOrder asc) {pageTitleMenu, slug}`
);

export const HOME_QUERY = defineQuery(`*[_type == "home"][0]{
  pageTitleMenu, slug, heroImage, introduction,
}`);

export const PROJECTS_QUERY = defineQuery(`*[_type == "projects"][0]{
  pageTitleMenu, slug, introduction,
}`);
export const PROJECTS_GALLERY_QUERY =
  defineQuery(`*[_type == "project" && defined(slug.current)]{
  title, sortOrder, slug, titleImage
}`);

export const PROJECT_QUERY =
  defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  title, sortOrder, slug, titleImage, text, gallery,
}`);

export const ABOUT_QUERY = defineQuery(`*[_type == "about"][0]{
  pageTitleMenu, slug, image, text,
}`);

export const CONTACT_QUERY = defineQuery(`*[_type == "contact"][0]{
  pageTitleMenu, slug, text, address, telephone, email,
}`);

export const DISCLAIMER_QUERY = defineQuery(`*[_type == "disclaimer"][0]{
  pageTitleMenu, slug, legal, disclaimer,
}`);

export const LOGO_QUERY = defineQuery(`*[_type == "logo"][0]{
  logo,
}`);
