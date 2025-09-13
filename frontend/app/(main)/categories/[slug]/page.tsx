import Link from "next/link";
import { notFound } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

type CategoryPostListItem = {
  _id: string;
  title?: string | null;
  slug?: { current?: string | null } | null;
  excerpt?: string | null;
};

type CategoryWithOptionalDescription = Category & {
  description?: string;
  posts?: CategoryPostListItem[];
};

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
      {Array.isArray(category.posts) && category.posts.length > 0 && (
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {category.posts.map((post) => (
            <Card key={post._id}>
              <CardHeader>
                <CardTitle>
                  <Link
                    href={`/blog/${post.slug?.current ?? ""}`}
                    className="hover:underline"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              {post.excerpt && (
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
