import { groq } from "next-sanity";

import { imageQuery } from "../shared/image";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const timeline3Query = groq`
  _type == "timeline-3" => {
    _type,
    _key,
    padding,
    title,
    description,
    links[]{
      ${linkQuery},
    },
    columns[]{
      _key,
      title,
      description,
      image{
        ${imageQuery}
      },
    },
  }
`;
