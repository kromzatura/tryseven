import { groq } from "next-sanity";

import { bodyQuery } from "../shared/body";
import { imageQuery } from "../shared/image";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const hero160Query = groq`
  _type == "hero-160" => {
    _type,
    _key,
    backgroundImage{
      ${imageQuery}
    },
    tag,
    title,
    body[]{
      ${bodyQuery}
    },
    links[]{
      ${linkQuery}
    },
    image{
      ${imageQuery}
    },
  }
`;
