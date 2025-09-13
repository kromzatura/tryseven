import { defineField, defineType } from "sanity";

export default defineType({
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    defineField({
      name: "isExternal",
      type: "boolean",
      title: "Is External",
      initialValue: false,
    }),
    defineField({
      name: "internalLink",
      type: "reference",
      title: "Internal Link",
      to: [{ type: "page" }, { type: "post" }],
      options: {
        filter: 'defined(slug.current)'
      },
  hidden: ({ parent }) => Boolean(parent?.isExternal),
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "href",
      title: "href",
      type: "url",
  hidden: ({ parent }) => !Boolean(parent?.isExternal),
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
    defineField({
      name: "target",
      type: "boolean",
      title: "Open in new tab",
      initialValue: false,
  hidden: ({ parent }) => !Boolean(parent?.isExternal),
    }),
    defineField({
      name: "buttonVariant",
      type: "button-variant",
      title: "Button Variant",
    }),
  ],
});
