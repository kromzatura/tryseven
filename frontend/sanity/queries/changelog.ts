import { groq } from "next-sanity";

import { bodyQuery } from "./shared/body";
import { categoryQuery } from "./shared/category";
import { imageQuery } from "./shared/image";

export const CHANGELOGS_QUERY = groq`*[_type == "changelog" && defined(slug)] | order(date desc){
    _id,
    title,
    slug,
    version,
    date,
    body[]{
      ${bodyQuery}
    },
    image{
      ${imageQuery}
    },
    author->{
      name,
      title,
      image {
        ${imageQuery}
      }
    },
    categories[]->{
      ${categoryQuery}
    },
}`;
