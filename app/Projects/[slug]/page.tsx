import { allProjects } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Button from '@/components/Button'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const MDXContent = useMDXComponent(project.body.code)

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-gray-400 mb-6" aria-label="Breadcrumb">
          <ol className="flex space-x-2">
            <li><a href="/" className="hover:text-cyan-400">Home</a></li>
            <li>/</li>
            <li><a href="/projects" className="hover:text-cyan-400">Projects</a></li>
            <li>/</li>
            <li className="text-cyan-400">{project.title}</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {project.title}
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Lead: {project.lead} | Domain: {project.domain}
        </p>

        <div className="prose prose-invert max-w-none mb-8">
          <MDXContent />
        </div>

        <p className="text-gray-400 mb-6">Timeline: {project.timeline}</p>

        {project.publications.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Publications</h2>
            <ul className="list-disc list-inside text-gray-300">
              {project.publications.map((pub, i) => (
                <li key={i}>
                  <a href={pub.url} className="text-cyan-400 hover:underline">
                    {pub.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button variant="outline" href="/projects">
          ← Back to Projects
        </Button>
      </div>
    </div>
  )
}
