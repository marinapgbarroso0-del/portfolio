import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function Hero() {
  return <section className="hero page-width" aria-labelledby="hero-title"><div className="hero-top"><p className="eyebrow"><span className="status-dot" /> MARINA BARROSO · GRAPHIC DESIGN</p><span className="tiny-note">Independent mind.<br />Thoughtful design.</span></div><Reveal><h1 id="hero-title">Ideas with feeling.<br /><span className="hero-second">Design with <em>purpose.</em><span className="hero-flower" aria-hidden="true">✳</span></span></h1></Reveal><div className="hero-bottom"><p>A space for visual identities, creative explorations,<br className="desktop-break" /> and stories told through design.</p><Link className="text-link" href="#work">Explore my work <span aria-hidden="true">↓</span></Link></div></section>;
}
export function Showreel() {
  return <section className="showreel page-width" id="showreel" aria-labelledby="showreel-title"><div className="reel-layout"><span className="eyebrow">A LITTLE OF EVERYTHING</span><h2 id="showreel-title">Always in <em>motion.</em></h2><span className="reel-note">Showreel coming soon<br />Video placeholder</span><div className="reel-symbol" aria-hidden="true">✳</div></div></section>;
}
export function SelectedWorks() {
  return <section id="work" className="section page-width" aria-labelledby="work-title"><div className="section-heading"><div><p className="eyebrow">01 / A FEW EXPLORATIONS</p><h2 id="work-title">Selected <em>works.</em></h2></div><span className="section-note">A selection of possibilities.<br />All projects below are placeholders.</span></div><div className="project-grid">{projects.filter(p => p.featured).map(p => <Reveal key={p.slug}><ProjectCard project={p} /></Reveal>)}</div></section>;
}
export function Portfolio() {
  return <section id="portfolio" className="portfolio section page-width" aria-labelledby="portfolio-title"><div className="section-heading"><div><p className="eyebrow">02 / THE BIGGER PICTURE</p><h2 id="portfolio-title">The <em>portfolio.</em></h2></div><span className="section-note">Ideas, experiments & everything between.</span></div><div className="project-list">{projects.map((project, index) => <Link href={`/projects/${project.slug}`} key={project.slug} className="project-row"><span className="row-index">0{index + 1}</span><h3>{project.title}</h3><span className="row-category">{project.category}</span><span className="placeholder-tag">Placeholder</span><span aria-hidden="true">↗</span></Link>)}</div></section>;
}
export function About() {
  return <section id="about" className="about section page-width" aria-labelledby="about-title"><div className="about-art" aria-label="Abstract portrait placeholder"><span className="eyebrow">A FACE BEHIND THE IDEAS</span><div className="portrait-shape"><span>m.</span></div><span className="portrait-note">PORTRAIT PLACEHOLDER</span></div><Reveal className="about-copy"><p className="eyebrow">03 / NICE TO MEET YOU</p><h2 id="about-title">Hi, I’m Marina.<br /><em>A curious creative.</em></h2><p>This is the beginning of my design story. A place to share the ideas, experiments, and visual worlds that I create.</p><p className="muted">About section placeholder — add your own introduction, what inspires you, and the kind of work you’d love to make.</p><div className="discipline-list"><span>Visual identity</span><span>Editorial design</span><span>Art direction</span></div></Reveal></section>;
}
export function Contact() {
  return <section id="contact" className="contact section page-width" aria-labelledby="contact-title"><p className="eyebrow">04 / GOOD THINGS START WITH A CONVERSATION</p><h2 id="contact-title">Let’s make<br /><em>something matter.</em><span aria-hidden="true">↗</span></h2><div className="contact-bottom"><p>Have an idea in mind?<br />This space is ready for your next hello.</p><p className="contact-placeholder">Contact details coming soon.<br /><span>Add your email and social links before publishing.</span></p></div></section>;
}
export function Footer() { return <footer className="footer page-width"><Link className="footer-name" href="/">Marina Barroso<span>✳</span></Link><p>Made with intention.</p><a href="#top">Back to top ↑</a></footer>; }
