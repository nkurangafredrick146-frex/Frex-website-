import { defineDocumentType, makeSource } from 'contentlayer/source-files'

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

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [CaseStudy],
})
