import Image from "next/image";
import Link from "next/link";

function ImageCapsule({ variant }: { variant: "light" | "blue" }) {
  return <Link href="#work" className={`hero-capsule hero-capsule-${variant}`} aria-label="Explore selected work — image is a placeholder">
    <Image src={`/images/hero-${variant}-placeholder.svg`} alt="" fill sizes="(max-width: 600px) 30vw, 24vw" priority />
    <span className="capsule-label">IMAGE PLACEHOLDER <span aria-hidden="true">↗</span></span>
  </Link>;
}

export function Hero() {
  return <section className="hero page-width" aria-labelledby="hero-title">
    <div className="hero-kicker"><p>GRAPHIC DESIGNER & VISUAL CREATIVE</p><span>FORM. FEELING. PERSPECTIVE.</span></div>
    <h1 id="hero-title" className="hero-name"><span className="hero-row hero-row-name"><span>Marina</span><ImageCapsule variant="light" /></span><span className="hero-row hero-row-surname"><span className="hero-row-number" aria-hidden="true">01 — INTRODUCTION</span><em>Barroso.</em></span></h1>
    <div className="hero-row hero-statement"><span className="hero-editorial">A different</span><ImageCapsule variant="blue" /><span className="hero-editorial"><em>point of view.</em></span></div>
    <div className="hero-bottom"><p>Ideas take shape through type, image, and a little<br className="desktop-break" /> unexpected perspective.</p><p className="hero-image-note">Temporary image studies.<br />Real photographs coming soon.</p><Link className="text-link" href="#work">Discover the work <span aria-hidden="true">↘</span></Link></div>
  </section>;
}
