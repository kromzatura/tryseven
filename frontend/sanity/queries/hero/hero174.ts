import { groq } from "next-sanity";

import { bodyQuery } from "../shared/body";
import { imageQuery } from "../shared/image";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const hero174Query = groq`
  _type == "hero-174" => {
    _type,
    _key,
    backgroundImage{
      ${imageQuery}
    },
    title,
    body[]{
      ${bodyQuery}
    },
    links[]{
      ${linkQuery}
    },
    tag
  }
`;
