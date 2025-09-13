import Breadcrumbs from "@/components/ui/breadcrumbs";
import { buildCategoryBreadcrumbs } from "@/lib/breadcrumbs";

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = buildCategoryBreadcrumbs();

  return (
    <>
      <div className="container py-6">
        <Breadcrumbs links={links} />
      </div>
      {children}
    </>
  );
}
