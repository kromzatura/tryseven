import { groq } from "next-sanity";

import { imageQuery } from "./shared/image";
import { linkQuery } from "./shared/link";

export const TEAM_QUERY = groq`*[_type == "team" && defined(slug)] | order(orderRank) {
    _id,
    name,
    title,
    description,
    slug,
    image{
      ${imageQuery}
    },
    links[]{
      ${linkQuery}
    },
}`;
