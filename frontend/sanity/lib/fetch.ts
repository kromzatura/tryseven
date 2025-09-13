import { sanityFetch } from "@/sanity/lib/live";
import { BANNER_QUERY } from "@/sanity/queries/banner";
import {
  CATEGORY_QUERY,
  CATEGORIES_SLUGS_QUERY,
} from "@/sanity/queries/category";
import { CHANGELOGS_QUERY } from "@/sanity/queries/changelog";
import { CONTACT_QUERY } from "@/sanity/queries/contact";
import { NAVIGATION_QUERY } from "@/sanity/queries/navigation";
import { PAGE_QUERY, PAGES_SLUGS_QUERY } from "@/sanity/queries/page";
import {
  POST_QUERY,
  POSTS_QUERY,
  POSTS_SLUGS_QUERY,
  POSTS_COUNT_QUERY,
} from "@/sanity/queries/post";
import { SETTINGS_QUERY } from "@/sanity/queries/settings";
import { TEAM_QUERY } from "@/sanity/queries/team";
import {
  PAGE_QUERYResult,
  PAGES_SLUGS_QUERYResult,
  // Type for categories slugs will be inferred from query string mapping in sanity.types.ts if present
  POST_QUERYResult,
  POSTS_QUERYResult,
  POSTS_SLUGS_QUERYResult,
  NAVIGATION_QUERYResult,
  BANNER_QUERYResult,
  SETTINGS_QUERYResult,
  CONTACT_QUERYResult,
  CHANGELOGS_QUERYResult,
  TEAM_QUERYResult,
  Category,
} from "@/sanity.types";

export type CATEGORIES_SLUGS_QUERYResult = Array<{
  slug?: { current?: string | null } | null;
}>;

export const fetchSanityNavigation =
  async (): Promise<NAVIGATION_QUERYResult> => {
    const { data } = await sanityFetch({
      query: NAVIGATION_QUERY,
    });

    return data;
  };

export const fetchSanityBanner = async (): Promise<BANNER_QUERYResult> => {
  const { data } = await sanityFetch({
    query: BANNER_QUERY,
  });
  return data;
};

export const fetchSanityPageBySlug = async ({
  slug,
}: {
  slug: string;
}): Promise<PAGE_QUERYResult> => {
  const { data } = await sanityFetch({
    query: PAGE_QUERY,
    params: { slug },
  });

  return data;
};

export const fetchSanityPagesStaticParams =
  async (): Promise<PAGES_SLUGS_QUERYResult> => {
    const { data } = await sanityFetch({
      query: PAGES_SLUGS_QUERY,
      perspective: "published",
      stega: false,
    });

    return data;
  };

export const fetchSanityPosts = async ({
  page,
  limit,
}: {
  page?: number;
  limit: number;
}): Promise<POSTS_QUERYResult> => {
  const offset = page && limit ? (page - 1) * limit : 0;
  const end = offset + limit;
  const { data } = await sanityFetch({
    query: POSTS_QUERY,
    params: { offset, end },
  });

  return data;
};

export const fetchSanityChangelogs =
  async (): Promise<CHANGELOGS_QUERYResult> => {
    const { data } = await sanityFetch({
      query: CHANGELOGS_QUERY,
    });

    return data;
  };

export const fetchSanityTeam = async (): Promise<TEAM_QUERYResult> => {
  const { data } = await sanityFetch({
    query: TEAM_QUERY,
  });
  return data;
};

export const fetchSanityPostsCount = async (): Promise<number> => {
  const { data } = await sanityFetch({
    query: POSTS_COUNT_QUERY,
  });
  return data;
};

export const fetchSanityPostBySlug = async ({
  slug,
}: {
  slug: string;
}): Promise<POST_QUERYResult> => {
  const { data } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  });

  return data;
};

export const fetchSanityPostsStaticParams =
  async (): Promise<POSTS_SLUGS_QUERYResult> => {
    const { data } = await sanityFetch({
      query: POSTS_SLUGS_QUERY,
      perspective: "published",
      stega: false,
    });

    return data;
  };

export const fetchSanityCategoriesStaticParams =
  async (): Promise<CATEGORIES_SLUGS_QUERYResult> => {
    const { data } = await sanityFetch({
      query: CATEGORIES_SLUGS_QUERY,
      perspective: "published",
      stega: false,
    });

    return data as unknown as CATEGORIES_SLUGS_QUERYResult;
  };

export const fetchSanitySettings = async (): Promise<SETTINGS_QUERYResult> => {
  const { data } = await sanityFetch({
    query: SETTINGS_QUERY,
  });

  return data;
};

export const fetchSanityContact = async (): Promise<CONTACT_QUERYResult> => {
  const { data } = await sanityFetch({
    query: CONTACT_QUERY,
  });

  return data;
};

export const fetchSanityCategoryBySlug = async ({
  slug,
}: {
  slug: string;
}): Promise<Category | null> => {
  const { data } = await sanityFetch({
    query: CATEGORY_QUERY,
    params: { slug },
  });

  return data as unknown as Category | null;
};

export const getOgImageUrl = ({
  type,
  slug,
}: {
  type: "post" | "page" | "category";
  slug: string;
}): string => {
  // Clean the slug by removing any path segments before the last slash (e.g. "blog/my-post" becomes "my-post")
  const cleanSlug = slug.split("/").pop() || slug;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return `${baseUrl}/api/og?type=${type}&slug=${encodeURIComponent(cleanSlug)}`;
};
