import { groq } from "next-sanity";

import { imageQuery } from "../shared/image";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const gallery8Query = groq`
  _type == "gallery-8" => {
    _type,
    _key,
    padding,
    link{
      ${linkQuery},
    },
    columns[]{
      _key,
      image{
        ${imageQuery}
      },
      link{
        ${linkQuery},
      },
      categories[]->{
        _id,
        title,
        color
      },
    },
  }
`;
