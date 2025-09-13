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
  },
  // All posts referencing this category
  "posts": *[_type == "post" && references(^._id)] | order(_createdAt desc){
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    image{
      ...,
      asset->{
        _id,
        url,
        mimeType,
        metadata {
          lqip,
          dimensions { width, height }
        }
      }
    },
    author->{
      name,
      title,
      image{
        ...,
        asset->{
          _id,
          url,
          mimeType,
          metadata {
            lqip,
            dimensions { width, height }
          }
        }
      }
    }
  }
}`;

export const CATEGORIES_SLUGS_QUERY = groq`*[_type == "category" && defined(slug)]{slug}`;

export const CATEGORIES_QUERY = groq`*[_type == "category" && defined(slug)] | order(title asc){
  _id,
  title,
  slug,
  description,
  color
}`;
