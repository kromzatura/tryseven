import { groq } from "next-sanity";

import { imageQuery } from "../shared/image";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const gallery3Query = groq`
  _type == "gallery-3" => {
    _type,
    _key,
    padding,
    title,
    columns[]{
      _key,
      title,
      description,
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
