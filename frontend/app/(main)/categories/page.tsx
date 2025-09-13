import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchSanityCategories } from "@/sanity/lib/fetch";
import { generatePageMetadata } from "@/sanity/lib/metadata";

export function generateMetadata() {
  return generatePageMetadata({
    page: {
      title: "Categories",
      seo: { title: "Categories", metaDescription: "Browse all categories" },
    },
    slug: "categories",
    type: "category",
  });
}

export default async function CategoriesIndexPage() {
  const categories = await fetchSanityCategories();

  return (
    <section className="container py-16 xl:py-20">
      <h1 className="text-3xl font-semibold md:text-5xl">Categories</h1>
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
