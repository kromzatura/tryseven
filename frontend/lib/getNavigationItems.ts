import { fetchSanityNavigation } from "@/sanity/lib/fetch";

import slugify from "./slugify";

export const getNavigationItems = async (title: string) => {
  const navigation = await fetchSanityNavigation();
  return navigation?.find((item) => slugify(item.title ?? "") === title)?.links;
};
