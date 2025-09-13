import SectionContainer from "@/components/ui/section-container";
import { cn } from "@/lib/utils";
import { PAGE_QUERYResult } from "@/sanity.types";

import Feature15Card from "./feature15-card";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];
type Feature15 = Extract<Block, { _type: "feature-15" }>;
type FeatureColumn = NonNullable<NonNullable<Feature15["columns"]>[number]>;

export default function Feature15({
  padding,
  columns,
  gridColumns,
}: Feature15) {
  return (
    <SectionContainer padding={padding}>
      {columns && columns?.length > 0 && (
        <div
          className={cn(
            "mx-auto mt-20 grid gap-6",
            gridColumns === "grid-cols-2" ? "max-w-5xl" : undefined,
            `lg:${gridColumns}`
          )}
        >
          {columns?.map((column) => {
            switch (column._type) {
              case "feature-15-card":
                return (
                  <Feature15Card
                    key={column._key}
                    {...(column as Extract<
                      FeatureColumn,
                      { _type: "feature-15-card" }
                    >)}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      )}
    </SectionContainer>
  );
}
