import { groq } from "next-sanity";

import { imageQuery } from "../shared/image";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const compare5Query = groq`
  _type == "compare-5" => {
    _type,
    _key,
    padding,
    columns[]{
      _key,
      image{
        ${imageQuery}
      },
      title,
      description,
      link {
        ${linkQuery}
      },
    },
  }
`;
