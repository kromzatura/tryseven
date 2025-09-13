import SectionContainer from "@/components/ui/section-container";
import { PAGE_QUERYResult } from "@/sanity.types";

import Feature3Card from "./feature3-card";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];
type Feature3 = Extract<Block, { _type: "feature-3" }>;
type FeatureColumn = NonNullable<NonNullable<Feature3["columns"]>[number]>;

export default function Feature3({ padding, columns }: Feature3) {
  return (
    <SectionContainer padding={padding}>
      {columns && columns?.length > 0 && (
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {columns?.map((column) => {
              switch (column._type) {
                case "feature-3-card":
                  return (
                    <Feature3Card
                      key={column._key}
                      {...(column as Extract<
                        FeatureColumn,
                        { _type: "feature-3-card" }
                      >)}
                    />
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      )}
    </SectionContainer>
  );
}
