import { groq } from "next-sanity";

import { imageQuery } from "../../shared/image";
import { linkQuery } from "../../shared/link";

// @sanity-typegen-ignore
export const feature66CardQuery = groq`
  _type == "feature-66-card" => {
    _type,
    _key,
    logo{
      ${imageQuery}
    },
    image{
      ${imageQuery}
    },
    link {
      ${linkQuery}
    }
  }
`;
