import { notFound } from "next/navigation";

import Breadcrumbs from "@/components/ui/breadcrumbs";
import { buildBlogBreadcrumbs } from "@/lib/breadcrumbs";
import { fetchSanityPostBySlug } from "@/sanity/lib/fetch";

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchSanityPostBySlug({ slug });

  if (!post) {
    notFound();
  }

  const links = buildBlogBreadcrumbs(post.title as string | undefined);

  return (
    <>
      <div className="container py-6">
        <Breadcrumbs links={links} />
      </div>
      {children}
    </>
  );
}
