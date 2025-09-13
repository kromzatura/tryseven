import { groq } from "next-sanity";

import { imageQuery } from "../../shared/image";
import { linkQuery } from "../../shared/link";

// @sanity-typegen-ignore
export const feature202CardQuery = groq`
  _type == "feature-202-card" => {
    _type,
    _key,
    iconVariant,
    title,
    description,
    image{
      ${imageQuery}
    },
    link {
      ${linkQuery}
    }
  }
`;
