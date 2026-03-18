import { projects } from '@/data/projects'
import Button from '@/components/Button'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Explore FREX initiatives and research breakthroughs.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.slug} className="bg-gray-900/50 rounded-lg overflow-hidden border border-cyan-500/20">
              <div className="h-48 bg-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
              </div>
              <div className="p-6">
                <div className="text-sm text-cyan-400 mb-2">{p.domain}</div>
                <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
                <p className="text-gray-400 mb-1">Lead: {p.lead}</p>
                <p className="text-gray-300 mb-4">{p.description}</p>
                <Button variant="outline" size="sm" href={`/projects/${p.slug}`}>
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
