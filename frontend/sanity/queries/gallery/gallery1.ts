import { groq } from "next-sanity";

import { categoryQuery } from "../shared/category";
import { imageQuery } from "../shared/image";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const gallery1Query = groq`
  _type == "gallery-1" => {
    _type,
    _key,
    padding,
    columns[]{
      _key,
      title,
      image{
        ${imageQuery}
      },
      logo{
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
