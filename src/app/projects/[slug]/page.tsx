import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Artwork } from "@/components/Artwork";
import { Footer } from "@/components/Sections";
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  return { title: project ? `${project.title} (Placeholder)` : "Project not found" };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <><main id="main" className="project-detail page-width"><Link className="text-link" href="/#work">← All work</Link><div className="detail-heading"><div><p className="eyebrow">{project.category} / {project.year}</p><h1>{project.title}<em>.</em></h1></div><span className="placeholder-tag">Placeholder project</span></div><Artwork kind={project.artwork} /><div className="detail-description"><h2>About the <em>concept.</em></h2><div><p>{project.description}</p><p className="muted">This is sample content, not a real client commission or a claim of professional experience.</p><div className="discipline-list">{project.disciplines.map(d => <span key={d}>{d}</span>)}</div></div></div><Link className="next-project" href={`/projects/${next.slug}`}>Next exploration <span>{next.title} ↗</span></Link></main><Footer /></>;
}
