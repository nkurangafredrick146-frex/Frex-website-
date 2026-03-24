import { allProjects } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Button from '@/components/Button'
import { Metadata } from 'next'
import Image from 'next/image'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = allProjects.find((p) => p.slug === params.slug)
  if (!project) return { title: 'Project Not Found' }
  return { title: `${project.title} | FREX Projects` }
}

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

        <Button variant="outline" size="sm" href="/projects">← All Projects</Button>

        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {project.title}
        </h1>
        <p className="text-cyan-400 mb-1">{project.domain}</p>
        <p className="text-gray-400 mb-4">Lead: {project.lead} | {project.timeline}</p>

        {project.image && (
          <div className="relative h-80 w-full mb-6">
            <Image src={project.image} alt={project.title} fill className="object-cover rounded-lg" />
          </div>
        )}

        {/* MDX body content */}
        <div className="prose prose-invert max-w-none mb-8">
          <MDXContent />
        </div>

        {project.publications.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Related Publications</h2>
            <ul className="list-disc list-inside text-gray-300">
              {project.publications.map((pub, i) => (
                <li key={i}>
                  <a href={pub.url} className="text-cyan-400 hover:underline">{pub.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
            }
