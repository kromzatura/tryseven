import { groq } from "next-sanity";

import { bodyQuery } from "../../shared/body";
import { linkQuery } from "../../shared/link";

// @sanity-typegen-ignore
export const featureContentQuery = groq`
  _type == "feature-content" => {
    _type,
    _key,
    padding,
    iconVariant,
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
