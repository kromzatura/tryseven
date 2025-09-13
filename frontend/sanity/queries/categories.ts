import { groq } from "next-sanity";

import { metaQuery } from "./shared/meta";

export const CATEGORIES_INDEX_QUERY = groq`*[_type == "categories"][0]{
  title,
  description,
  ${metaQuery},
}`;
