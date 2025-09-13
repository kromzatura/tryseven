## Your Blueprint for New Pages

For both your main "Products" listing page and your individual "[Product]" detail pages, you will replicate the same steps you just took for categories.

1.  Schema (/studio)

    product.ts: Create a new schema for a single product. Use your post.ts as a template. It should have title, slug, description, etc.

    Reference Category: In product.ts, add the categories field that references your unified category schema, just like you did in post.ts.
    TypeScript

    defineField({
    name: 'categories',
    title: 'Categories',
    type: 'array',
    of: [{type: 'reference', to: {type: 'category'}}],
    }),

2.  Routing & Data Fetching (/frontend)

    Create Routes:

        Create a page for the main product listing: app/(main)/products/page.tsx.

        Create a dynamic route for a single product: app/(main)/products/[slug]/page.tsx.

    Implement SSG: For the products/[slug] route, you will add generateStaticParams to pre-build a page for every product, just like you did for categories.

3.  SEO & Metadata (/frontend)

    Update the Helper: First, update your generatePageMetadata helper in @/sanity/lib/metadata to handle a new type: 'product'.

    Implement generateMetadata: On your products/[slug]/page.tsx, export the generateMetadata function that fetches the product by its slug and calls your centralized helper.

By following these same steps, you guarantee that your product pages will be just as performant, SEO-friendly, and maintainable as the rest of your site.
