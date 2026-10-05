export const websiteProductSchema = {
  name: 'websiteProduct',
  title: 'Website Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'SaaS & AI', value: 'saas-ai' },
          { title: 'E-Commerce', value: 'ecommerce' },
          { title: 'Agency & Portfolio', value: 'agency-portfolio' },
          { title: 'FinTech & Web3', value: 'fintech-web3' },
        ],
      },
    },
    {
      name: 'priceUSD',
      title: 'Price (USD)',
      type: 'number',
    },
    {
      name: 'priceINR',
      title: 'Price (INR)',
      type: 'number',
    },
    {
      name: 'discountPercentage',
      title: 'Discount (%)',
      type: 'number',
    },
    {
      name: 'statusPill',
      title: 'Status Pill Badge',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: '' },
          { title: 'NEW', value: 'NEW' },
          { title: 'MOST POPULAR', value: 'MOST POPULAR' },
          { title: 'TOP RATED', value: 'TOP RATED' },
        ],
      },
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'previewImages',
      title: 'Preview Screenshots',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'demoUrl',
      title: 'Live Demo URL',
      type: 'url',
    },
    {
      name: 'features',
      title: 'Feature List',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'pagesCount',
      title: 'Included Pages Count',
      type: 'number',
    },
  ],
};
