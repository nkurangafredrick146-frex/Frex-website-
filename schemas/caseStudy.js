export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'client', type: 'string', title: 'Client' },
    { name: 'industry', type: 'string', title: 'Industry' },
    { name: 'summary', type: 'text', title: 'Summary' },
    { name: 'image', type: 'image', title: 'Image' },
    { name: 'content', type: 'array', title: 'Content', of: [{ type: 'block' }] },
  ],
}
