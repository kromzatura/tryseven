import { notFound } from "next/navigation";

import Breadcrumbs from "@/components/ui/breadcrumbs";
import { buildPageBreadcrumbs } from "@/lib/breadcrumbs";
import { fetchSanityPageBySlug } from "@/sanity/lib/fetch";

export default async function DynamicPageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await fetchSanityPageBySlug({ slug });

  if (!page) {
    notFound();
  }

  const links = buildPageBreadcrumbs(
    (page.meta?.title as string | undefined) ?? undefined,
    slug
  );

  return (
    <>
      <div className="container py-6">
        <Breadcrumbs links={links} />
      </div>
      {children}
    </>
  );
}
