import SectionContainer from "@/components/ui/section-container";
import { PAGE_QUERYResult } from "@/sanity.types";

import FeatureContent from "./feature-content";
import FeatureImage from "./feature-image";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];
type Feature1 = Extract<Block, { _type: "feature-1" }>;
type FeatureColumn = NonNullable<NonNullable<Feature1["columns"]>[number]>;

export default function Feature1({ padding, columns }: Feature1) {
  return (
    <SectionContainer padding={padding}>
      {columns && columns?.length > 0 && (
        <div className="grid items-center gap-8 lg:gap-16 lg:grid-cols-2">
          {columns?.map((column) => {
            switch (column._type) {
              case "feature-content":
                return (
                  <FeatureContent
                    key={column._key}
                    {...(column as Extract<
                      FeatureColumn,
                      { _type: "feature-content" }
                    >)}
                  />
                );
              case "feature-image":
                return (
                  <FeatureImage
                    key={column._key}
                    {...(column as Extract<
                      FeatureColumn,
                      { _type: "feature-image" }
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
