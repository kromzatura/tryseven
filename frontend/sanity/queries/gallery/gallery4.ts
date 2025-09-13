import { groq } from "next-sanity";

import { categoryQuery } from "../shared/category";
import { imageQuery } from "../shared/image";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const gallery4Query = groq`
  _type == "gallery-4" => {
    _type,
    _key,
    padding,
    title,
    description,
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
        ${categoryQuery}
      },
    },
  }
`;
