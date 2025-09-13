import { getOgImageUrl } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import {
  PAGE_QUERYResult,
  POST_QUERYResult,
  CONTACT_QUERYResult,
} from "@/sanity.types";
const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";

export function generatePageMetadata({
  page,
  slug,
  type,
}: {
  page:
    | PAGE_QUERYResult
    | POST_QUERYResult
    | CONTACT_QUERYResult
    | {
        // Minimal Category shape needed for metadata
        title?: string | null;
        seo?: { title?: string | null; metaDescription?: string | null } | null;
      };
  slug: string;
  type: "post" | "page" | "category";
}) {
  type WithMeta = {
    meta?: {
      title?: string | null;
      description?: string | null;
      image?: {
        asset?: {
          metadata?: { dimensions?: { width?: number; height?: number } };
        };
      } | null;
      noindex?: boolean | null;
    } | null;
  };
  type WithSeo = {
    seo?: { title?: string | null; metaDescription?: string | null } | null;
  };

  const hasMeta = (v: unknown): v is WithMeta =>
    typeof v === "object" &&
    v !== null &&
    "meta" in (v as Record<string, unknown>);
  const hasSeo = (v: unknown): v is WithSeo =>
    typeof v === "object" &&
    v !== null &&
    "seo" in (v as Record<string, unknown>);

  const isCategory = type === "category";
  const title = isCategory
    ? (hasSeo(page) && page.seo?.title) ||
      (page as { title?: string | null })?.title
    : hasMeta(page)
    ? page.meta?.title
    : undefined;
  const description = isCategory
    ? (hasSeo(page) && page.seo?.metaDescription) || undefined
    : hasMeta(page)
    ? page.meta?.description
    : undefined;
  const image = hasMeta(page) ? page.meta?.image : undefined;

  return {
    title,
    description,
    openGraph: {
      images: [
        {
          url: image
            ? urlFor(image).quality(100).url()
            : getOgImageUrl({ type, slug }),
          width: image?.asset?.metadata?.dimensions?.width || 1200,
          height: image?.asset?.metadata?.dimensions?.height || 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    robots: !isProduction
      ? "noindex, nofollow"
      : hasMeta(page) && page.meta?.noindex
      ? "noindex"
      : "index, follow",
    alternates: {
      canonical: `/${slug === "index" ? "" : slug}`,
    },
  };
}
