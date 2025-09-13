import { groq } from "next-sanity";

import { imageQuery } from "../shared/image";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const logos2Query = groq`
  _type == "logos-2" => {
    _type,
    _key,
    padding,
    title,
    description,
    links[]{
      ${linkQuery}
    },
    images[]{
      ${imageQuery}
    },
  }
`;
