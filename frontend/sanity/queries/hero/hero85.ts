import { groq } from "next-sanity";

import { bodyQuery } from "../shared/body";
import { imageQuery } from "../shared/image";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const hero85Query = groq`
  _type == "hero-85" => {
    _type,
    _key,
    tag{
      title,
      description
    },
    title,
    body[]{
      ${bodyQuery}
    },
    images[]{
      ${imageQuery}
    },
    links[]{
      ${linkQuery}
    },
  }
`;
