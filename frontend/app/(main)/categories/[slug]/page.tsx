import { notFound } from "next/navigation";

import {
  fetchSanityCategoryBySlug,
  fetchSanityCategoriesStaticParams,
} from "@/sanity/lib/fetch";
import { generatePageMetadata } from "@/sanity/lib/metadata";
import { Category } from "@/sanity.types";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const category = await fetchSanityCategoryBySlug({ slug });

  if (!category) {
    notFound();
  }

  return generatePageMetadata({
    page: category as {
      title?: string | null;
      seo?: { title?: string | null; metaDescription?: string | null } | null;
    },
    slug: `categories/${slug}`,
    type: "category",
  });
}

type CategoryWithOptionalDescription = Category & { description?: string };

export async function generateStaticParams() {
  const categories = await fetchSanityCategoriesStaticParams();

  return categories.map((cat) => ({ slug: cat.slug?.current }));
}

export default async function CategoryPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const category = (await fetchSanityCategoryBySlug({
    slug,
  })) as CategoryWithOptionalDescription;

  if (!category) {
    notFound();
  }

  return (
    <section className="container py-16 xl:py-20">
      <h1 className="text-3xl font-semibold md:text-5xl">{category.title}</h1>
      {category.description && (
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {category.description}
        </p>
      )}
    </section>
  );
}
