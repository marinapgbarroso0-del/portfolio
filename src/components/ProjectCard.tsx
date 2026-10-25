import Link from "next/link";
import type { Project } from "@/data/projects";
import { Artwork } from "./Artwork";
export function ProjectCard({ project }: { project: Project }) {
  return <Link className="project-card group" href={`/projects/${project.slug}`}><div className="artwork-frame"><Artwork kind={project.artwork} /><span className="project-open" aria-hidden="true">↗</span></div><div className="project-caption"><div><h3>{project.title}</h3><p>{project.category} <span>· Placeholder</span></p></div><span aria-hidden="true">↗</span></div></Link>;
}
