import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchSanityCategories, fetchSanityCategoriesIndex } from "@/sanity/lib/fetch";
import { generatePageMetadata } from "@/sanity/lib/metadata";

export async function generateMetadata() {
  const index = await fetchSanityCategoriesIndex();
  const page = {
    title: index?.title ?? "Categories",
    seo: {
      title: index?.meta?.title ?? index?.title ?? "Categories",
      metaDescription: index?.meta?.description ?? index?.description ?? undefined,
    },
  };
  return generatePageMetadata({ page, slug: "categories", type: "category" });
}

export default async function CategoriesIndexPage() {
  const [index, categories] = await Promise.all([
    fetchSanityCategoriesIndex(),
    fetchSanityCategories(),
  ]);

  return (
    <section className="container py-16 xl:py-20">
      <h1 className="text-3xl font-semibold md:text-5xl">{index?.title ?? "Categories"}</h1>
      {index?.description && (
        <p className="mt-4 max-w-2xl text-muted-foreground">{index.description}</p>
      )}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Card key={cat._id}>
            <CardHeader>
              <CardTitle>
                <Link
                  href={`/categories/${cat.slug?.current ?? ""}`}
                  className="hover:underline"
                >
                  {cat.title}
                </Link>
              </CardTitle>
            </CardHeader>
            {cat.description && (
              <CardContent>
                <p className="text-muted-foreground">{cat.description}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
