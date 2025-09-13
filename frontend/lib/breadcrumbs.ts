export type BreadcrumbLink = {
  label: string;
  href: string;
};

export function buildHomeCrumb(): BreadcrumbLink[] {
  return [];
}

export function buildBlogBreadcrumbs(title?: string | null): BreadcrumbLink[] {
  const crumbs: BreadcrumbLink[] = [
    { label: "Blog", href: "/blog" },
  ];
  if (title) crumbs.push({ label: title, href: "#" });
  return crumbs;
}

export function buildCategoryBreadcrumbs(title?: string | null): BreadcrumbLink[] {
  const crumbs: BreadcrumbLink[] = [
    { label: "Categories", href: "/categories" },
  ];
  if (title) crumbs.push({ label: title, href: "#" });
  return crumbs;
}

export function buildPageBreadcrumbs(title?: string | null, slug?: string): BreadcrumbLink[] {
  const crumbs: BreadcrumbLink[] = [];
  if (slug && slug !== "index") {
    crumbs.push({ label: title || slug, href: `/${slug}` });
  }
  return crumbs;
}
