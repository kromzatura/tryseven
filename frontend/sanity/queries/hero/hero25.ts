import { groq } from "next-sanity";

import { imageQuery } from "../shared/image";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const hero25Query = groq`
  _type == "hero-25" => {
    _type,
    _key,
    tagLine,
    title,
    image{
      ${imageQuery}
    },
    links[]{
      ${linkQuery}
    },
    tags
  }
`;
