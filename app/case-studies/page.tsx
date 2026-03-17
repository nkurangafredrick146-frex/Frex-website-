import { allCaseStudies } from 'contentlayer/generated'
import Button from '@/components/Button'

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Case Studies
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          See how FREX solutions drive real-world impact.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allCaseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="bg-gray-900/50 rounded-lg overflow-hidden border border-cyan-500/20"
            >
              <div className="h-48 bg-gray-800 relative">
                {/* Placeholder for image – replace with Next/Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
              </div>
              <div className="p-6">
                <div className="text-sm text-cyan-400 mb-2">{cs.industry}</div>
                <h2 className="text-2xl font-bold mb-2">{cs.title}</h2>
                <p className="text-gray-400 mb-1">Client: {cs.client}</p>
                <p className="text-gray-300 mb-4">{cs.summary}</p>
                <Button variant="outline" size="sm" href={`/case-studies/${cs.slug}`}>
                  Read Full Study
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
