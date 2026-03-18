 import { defineDocumentType, makeSource } from 'contentlayer/source-files'

// ✅ Project type
export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/*.mdx`,
  contentType: 'mdx',
  fields: {
    slug: { type: 'string', required: true },
    title: { type: 'string', required: true },
    domain: { type: 'string', required: true },
    lead: { type: 'string', required: true },
    description: { type: 'string', required: true },
    timeline: { type: 'string', required: true },
    image: { type: 'string', required: false },
    publications: {
      type: 'list',
      of: {
        type: 'nested',
        fields: {
          title: { type: 'string' },
          url: { type: 'string' },
        },
      },
    },
  },
}))

// ✅ CaseStudy type
export const CaseStudy = defineDocumentType(() => ({
  name: 'CaseStudy',
  filePathPattern: `case-studies/*.mdx`,
  contentType: 'mdx',
  fields: {
    slug: { type: 'string', required: true },
    title: { type: 'string', required: true },
    client: { type: 'string', required: true },
    industry: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'string', required: false },
  },
}))

// ✅ Export both
export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project, CaseStudy],
})
