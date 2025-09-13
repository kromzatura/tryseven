import { imageQuery } from "./image";
import { linkQuery } from "./link";

export const bodyQuery = `
  ...,
  markDefs[]{
    ...,
    _type == "link" => {
      ${linkQuery}
    }
  },
  _type == "image" => {
    ${imageQuery}
  }
`;
