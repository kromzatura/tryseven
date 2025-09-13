import { groq } from "next-sanity";

import { imageQuery } from "../../shared/image";
import { linkQuery } from "../../shared/link";

// @sanity-typegen-ignore
export const feature157CardQuery = groq`
  _type == "feature-157-card" => {
    _type,
    _key,
    image{
      ${imageQuery}
    },
    link {
      ${linkQuery}
    }
  }
`;
