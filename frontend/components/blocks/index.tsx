import Blog13 from "@/components/blocks/blog/blog13";
import AllPosts13 from "@/components/blocks/blog/blog13/all-posts";
import Blog14 from "@/components/blocks/blog/blog14";
import AllPosts14 from "@/components/blocks/blog/blog14/all-posts";
import Blog16 from "@/components/blocks/blog/blog16";
import AllPosts16 from "@/components/blocks/blog/blog16/all-posts";
import Blog4 from "@/components/blocks/blog/blog4";
import AllPosts4 from "@/components/blocks/blog/blog4/all-posts";
import Blog7 from "@/components/blocks/blog/blog7";
import AllPosts7 from "@/components/blocks/blog/blog7/all-posts";
import Changelog1 from "@/components/blocks/changelog/changelog1";
import Changelog2 from "@/components/blocks/changelog/changelog2";
import Changelog3 from "@/components/blocks/changelog/changelog3";
import Changelog5 from "@/components/blocks/changelog/changelog5";
import Compare1 from "@/components/blocks/compare/compare1";
import Compare2 from "@/components/blocks/compare/compare2";
import Compare4 from "@/components/blocks/compare/compare4";
import Compare5 from "@/components/blocks/compare/compare5";
import Compare6 from "@/components/blocks/compare/compare6";
import FAQ1 from "@/components/blocks/faq/faq1";
import FAQ14 from "@/components/blocks/faq/faq14";
import FAQ5 from "@/components/blocks/faq/faq5";
import FAQ8 from "@/components/blocks/faq/faq8";
import FAQ9 from "@/components/blocks/faq/faq9";
import Feature1 from "@/components/blocks/feature/feature1";
import Feature117 from "@/components/blocks/feature/feature117";
import Feature12 from "@/components/blocks/feature/feature12";
import Feature15 from "@/components/blocks/feature/feature15";
import Feature157 from "@/components/blocks/feature/feature157";
import Feature202 from "@/components/blocks/feature/feature202";
import Feature3 from "@/components/blocks/feature/feature3";
import Feature66 from "@/components/blocks/feature/feature66";
import Gallery1 from "@/components/blocks/gallery/gallery1";
import Gallery10 from "@/components/blocks/gallery/gallery10";
import Gallery3 from "@/components/blocks/gallery/gallery3";
import Gallery4 from "@/components/blocks/gallery/gallery4";
import Gallery8 from "@/components/blocks/gallery/gallery8";
import Gallery9 from "@/components/blocks/gallery/gallery9";
import Hero12 from "@/components/blocks/hero/hero12";
import Hero13 from "@/components/blocks/hero/hero13";
import Hero160 from "@/components/blocks/hero/hero160";
import Hero174 from "@/components/blocks/hero/hero174";
import Hero25 from "@/components/blocks/hero/hero25";
import Hero57 from "@/components/blocks/hero/hero57";
import Hero85 from "@/components/blocks/hero/hero85";
import Logos1 from "@/components/blocks/logo/logos1";
import Logos2 from "@/components/blocks/logo/logos2";
import Logos4 from "@/components/blocks/logo/logos4";
import Logos9 from "@/components/blocks/logo/logos9";
import Pricing1 from "@/components/blocks/pricing/pricing1";
import Pricing16 from "@/components/blocks/pricing/pricing16";
import Pricing2 from "@/components/blocks/pricing/pricing2";
import Pricing7 from "@/components/blocks/pricing/pricing7";
import Pricing9 from "@/components/blocks/pricing/pricing9";
import SectionHeader from "@/components/blocks/section-header";
import Team1 from "@/components/blocks/team/team1";
import Team2 from "@/components/blocks/team/team2";
import Team3 from "@/components/blocks/team/team3";
import Team4 from "@/components/blocks/team/team4";
import Team5 from "@/components/blocks/team/team5";
import Team6 from "@/components/blocks/team/team6";
import Team8 from "@/components/blocks/team/team8";
import Timeline3 from "@/components/blocks/timelines/timeline3";
import Timeline4 from "@/components/blocks/timelines/timeline4";
import Timeline5 from "@/components/blocks/timelines/timeline5";
import Timeline6 from "@/components/blocks/timelines/timeline6";
import { PAGE_QUERYResult } from "@/sanity.types";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks?.map((block) => {
        switch (block._type) {
          case "section-header":
            return (
              <SectionHeader
                key={block._key}
                {...(block as Extract<Block, { _type: "section-header" }>)}
              />
            );
          case "hero-12":
            return (
              <Hero12
                key={block._key}
                {...(block as Extract<Block, { _type: "hero-12" }>)}
              />
            );
          case "hero-13":
            return (
              <Hero13
                key={block._key}
                {...(block as Extract<Block, { _type: "hero-13" }>)}
              />
            );
          case "hero-25":
            return (
              <Hero25
                key={block._key}
                {...(block as Extract<Block, { _type: "hero-25" }>)}
              />
            );
          case "hero-57":
            return (
              <Hero57
                key={block._key}
                {...(block as Extract<Block, { _type: "hero-57" }>)}
              />
            );
          case "hero-85":
            return (
              <Hero85
                key={block._key}
                {...(block as Extract<Block, { _type: "hero-85" }>)}
              />
            );
          case "hero-160":
            return (
              <Hero160
                key={block._key}
                {...(block as Extract<Block, { _type: "hero-160" }>)}
              />
            );
          case "hero-174":
            return (
              <Hero174
                key={block._key}
                {...(block as Extract<Block, { _type: "hero-174" }>)}
              />
            );
          case "faq-1":
            return (
              <FAQ1
                key={block._key}
                {...(block as Extract<Block, { _type: "faq-1" }>)}
              />
            );
          case "faq-5":
            return (
              <FAQ5
                key={block._key}
                {...(block as Extract<Block, { _type: "faq-5" }>)}
              />
            );
          case "faq-8":
            return (
              <FAQ8
                key={block._key}
                {...(block as Extract<Block, { _type: "faq-8" }>)}
              />
            );
          case "faq-9":
            return (
              <FAQ9
                key={block._key}
                {...(block as Extract<Block, { _type: "faq-9" }>)}
              />
            );
          case "faq-14":
            return (
              <FAQ14
                key={block._key}
                {...(block as Extract<Block, { _type: "faq-14" }>)}
              />
            );
          case "logos-1":
            return (
              <Logos1
                key={block._key}
                {...(block as Extract<Block, { _type: "logos-1" }>)}
              />
            );
          case "logos-2":
            return (
              <Logos2
                key={block._key}
                {...(block as Extract<Block, { _type: "logos-2" }>)}
              />
            );
          case "logos-4":
            return (
              <Logos4
                key={block._key}
                {...(block as Extract<Block, { _type: "logos-4" }>)}
              />
            );
          case "logos-9":
            return (
              <Logos9
                key={block._key}
                {...(block as Extract<Block, { _type: "logos-9" }>)}
              />
            );
          case "feature-1":
            return (
              <Feature1
                key={block._key}
                {...(block as Extract<Block, { _type: "feature-1" }>)}
              />
            );
          case "feature-3":
            return (
              <Feature3
                key={block._key}
                {...(block as Extract<Block, { _type: "feature-3" }>)}
              />
            );
          case "feature-12":
            return (
              <Feature12
                key={block._key}
                {...(block as Extract<Block, { _type: "feature-12" }>)}
              />
            );
          case "feature-15":
            return (
              <Feature15
                key={block._key}
                {...(block as Extract<Block, { _type: "feature-15" }>)}
              />
            );
          case "feature-66":
            return (
              <Feature66
                key={block._key}
                {...(block as Extract<Block, { _type: "feature-66" }>)}
              />
            );
          case "feature-117":
            return (
              <Feature117
                key={block._key}
                {...(block as Extract<Block, { _type: "feature-117" }>)}
              />
            );
          case "feature-157":
            return (
              <Feature157
                key={block._key}
                {...(block as Extract<Block, { _type: "feature-157" }>)}
              />
            );
          case "feature-202":
            return (
              <Feature202
                key={block._key}
                {...(block as Extract<Block, { _type: "feature-202" }>)}
              />
            );
          case "blog-4":
            return (
              <Blog4
                key={block._key}
                {...(block as Extract<Block, { _type: "blog-4" }>)}
              />
            );
          case "all-posts-4":
            return (
              <AllPosts4
                key={block._key}
                {...(block as Extract<Block, { _type: "all-posts-4" }>)}
              />
            );
          case "blog-7":
            return (
              <Blog7
                key={block._key}
                {...(block as Extract<Block, { _type: "blog-7" }>)}
              />
            );
          case "all-posts-7":
            return (
              <AllPosts7
                key={block._key}
                {...(block as Extract<Block, { _type: "all-posts-7" }>)}
              />
            );
          case "blog-13":
            return (
              <Blog13
                key={block._key}
                {...(block as Extract<Block, { _type: "blog-13" }>)}
              />
            );
          case "all-posts-13":
            return (
              <AllPosts13
                key={block._key}
                {...(block as Extract<Block, { _type: "all-posts-13" }>)}
              />
            );
          case "blog-14":
            return (
              <Blog14
                key={block._key}
                {...(block as Extract<Block, { _type: "blog-14" }>)}
              />
            );
          case "all-posts-14":
            return (
              <AllPosts14
                key={block._key}
                {...(block as Extract<Block, { _type: "all-posts-14" }>)}
              />
            );
          case "blog-16":
            return (
              <Blog16
                key={block._key}
                {...(block as Extract<Block, { _type: "blog-16" }>)}
              />
            );
          case "all-posts-16":
            return (
              <AllPosts16
                key={block._key}
                {...(block as Extract<Block, { _type: "all-posts-16" }>)}
              />
            );
          case "changelog-1":
            return (
              <Changelog1
                key={block._key}
                {...(block as Extract<Block, { _type: "changelog-1" }>)}
              />
            );
          case "changelog-2":
            return (
              <Changelog2
                key={block._key}
                {...(block as Extract<Block, { _type: "changelog-2" }>)}
              />
            );
          case "changelog-3":
            return (
              <Changelog3
                key={block._key}
                {...(block as Extract<Block, { _type: "changelog-3" }>)}
              />
            );
          case "changelog-5":
            return (
              <Changelog5
                key={block._key}
                {...(block as Extract<Block, { _type: "changelog-5" }>)}
              />
            );
          case "pricing-1":
            return (
              <Pricing1
                key={block._key}
                {...(block as Extract<Block, { _type: "pricing-1" }>)}
              />
            );
          case "pricing-2":
            return (
              <Pricing2
                key={block._key}
                {...(block as Extract<Block, { _type: "pricing-2" }>)}
              />
            );
          case "pricing-7":
            return (
              <Pricing7
                key={block._key}
                {...(block as Extract<Block, { _type: "pricing-7" }>)}
              />
            );
          case "pricing-9":
            return (
              <Pricing9
                key={block._key}
                {...(block as Extract<Block, { _type: "pricing-9" }>)}
              />
            );
          case "pricing-16":
            return (
              <Pricing16
                key={block._key}
                {...(block as Extract<Block, { _type: "pricing-16" }>)}
              />
            );
          case "team-1":
            return (
              <Team1
                key={block._key}
                {...(block as Extract<Block, { _type: "team-1" }>)}
              />
            );
          case "team-2":
            return (
              <Team2
                key={block._key}
                {...(block as Extract<Block, { _type: "team-2" }>)}
              />
            );
          case "team-3":
            return (
              <Team3
                key={block._key}
                {...(block as Extract<Block, { _type: "team-3" }>)}
              />
            );
          case "team-4":
            return (
              <Team4
                key={block._key}
                {...(block as Extract<Block, { _type: "team-4" }>)}
              />
            );
          case "team-5":
            return (
              <Team5
                key={block._key}
                {...(block as Extract<Block, { _type: "team-5" }>)}
              />
            );
          case "team-6":
            return (
              <Team6
                key={block._key}
                {...(block as Extract<Block, { _type: "team-6" }>)}
              />
            );
          case "team-8":
            return (
              <Team8
                key={block._key}
                {...(block as Extract<Block, { _type: "team-8" }>)}
              />
            );
          case "compare-1":
            return (
              <Compare1
                key={block._key}
                {...(block as Extract<Block, { _type: "compare-1" }>)}
              />
            );
          case "compare-2":
            return (
              <Compare2
                key={block._key}
                {...(block as Extract<Block, { _type: "compare-2" }>)}
              />
            );
          case "compare-4":
            return (
              <Compare4
                key={block._key}
                {...(block as Extract<Block, { _type: "compare-4" }>)}
              />
            );
          case "compare-5":
            return (
              <Compare5
                key={block._key}
                {...(block as Extract<Block, { _type: "compare-5" }>)}
              />
            );
          case "compare-6":
            return (
              <Compare6
                key={block._key}
                {...(block as Extract<Block, { _type: "compare-6" }>)}
              />
            );
          case "gallery-1":
            return (
              <Gallery1
                key={block._key}
                {...(block as Extract<Block, { _type: "gallery-1" }>)}
              />
            );
          case "gallery-3":
            return (
              <Gallery3
                key={block._key}
                {...(block as Extract<Block, { _type: "gallery-3" }>)}
              />
            );
          case "gallery-4":
            return (
              <Gallery4
                key={block._key}
                {...(block as Extract<Block, { _type: "gallery-4" }>)}
              />
            );
          case "gallery-8":
            return (
              <Gallery8
                key={block._key}
                {...(block as Extract<Block, { _type: "gallery-8" }>)}
              />
            );
          case "gallery-9":
            return (
              <Gallery9
                key={block._key}
                {...(block as Extract<Block, { _type: "gallery-9" }>)}
              />
            );
          case "gallery-10":
            return (
              <Gallery10
                key={block._key}
                {...(block as Extract<Block, { _type: "gallery-10" }>)}
              />
            );
          case "timeline-3":
            return (
              <Timeline3
                key={block._key}
                {...(block as Extract<Block, { _type: "timeline-3" }>)}
              />
            );
          case "timeline-4":
            return (
              <Timeline4
                key={block._key}
                {...(block as Extract<Block, { _type: "timeline-4" }>)}
              />
            );
          case "timeline-5":
            return (
              <Timeline5
                key={block._key}
                {...(block as Extract<Block, { _type: "timeline-5" }>)}
              />
            );
          case "timeline-6":
            return (
              <Timeline6
                key={block._key}
                {...(block as Extract<Block, { _type: "timeline-6" }>)}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
