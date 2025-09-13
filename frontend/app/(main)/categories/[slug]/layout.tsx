import { notFound } from "next/navigation";

import Breadcrumbs from "@/components/ui/breadcrumbs";
import { buildCategoryBreadcrumbs } from "@/lib/breadcrumbs";
import { fetchSanityCategoryBySlug } from "@/sanity/lib/fetch";

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await fetchSanityCategoryBySlug({ slug });

  if (!category) {
    notFound();
  }

  const links = buildCategoryBreadcrumbs(category.title as string | undefined);

  return (
    <>
      <div className="container py-6">
        <Breadcrumbs links={links} />
      </div>
      {children}
    </>
  );
}
