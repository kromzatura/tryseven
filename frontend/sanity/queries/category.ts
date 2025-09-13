import { groq } from "next-sanity";

export const CATEGORY_QUERY = groq`*[_type == "category" && slug.current == $slug][0]{
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  slug,
  description,
  color,
  seo{
    title,
    metaDescription
  }
}`;
