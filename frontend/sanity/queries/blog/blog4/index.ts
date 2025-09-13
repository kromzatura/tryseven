import { groq } from "next-sanity";

import { categoryQuery } from "../../shared/category";
import { imageQuery } from "../../shared/image";

// @sanity-typegen-ignore
export const blog4Query = groq`
  _type == "blog-4" => {
    _type,
    _key,
    padding,
    gridColumns,
    posts[]->{
      _id,
      _createdAt,
      title,
      slug,
      excerpt,
      image{
        ${imageQuery}
      },
      categories[]->{
        ${categoryQuery}
      },
      author->{
        _id,
        name,
        image{
          ${imageQuery}
        }
      }
    },
  }
`;
