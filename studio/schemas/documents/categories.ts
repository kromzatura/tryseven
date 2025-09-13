import { defineField, defineType } from "sanity";
import { LayoutList, Search } from "lucide-react";

const categories = defineType({
  name: "categories",
  title: "Categories Index",
  type: "document",
  icon: LayoutList,
  groups: [
    { name: "content", title: "Content", icon: LayoutList },
    { name: "seo", title: "SEO", icon: Search },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "content",
      validation: (Rule) =>
        Rule.max(160).warning("Keep it concise (≤160 chars)"),
    }),
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "object",
      group: "seo",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "title",
          title: "SEO Title",
          type: "string",
          validation: (Rule) => Rule.max(60).warning(),
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          validation: (Rule) => Rule.max(160).warning(),
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: title || "Categories Index" };
    },
  },
});

export default categories;
