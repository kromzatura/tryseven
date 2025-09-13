import { groq } from "next-sanity";

import { bodyQuery } from "../shared/body";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const hero13Query = groq`
  _type == "hero-13" => {
    _type,
    _key,
    tag,
    title,
    body[]{
      ${bodyQuery}
    },
    links[]{
      ${linkQuery}
    },
  }
`;
