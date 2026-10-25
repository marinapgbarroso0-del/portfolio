import Link from "next/link";
export function SiteHeader() {
  return <header className="site-header page-width"><Link className="wordmark" href="/" aria-label="Marina Barroso home">mb<span>✳</span></Link><nav aria-label="Main navigation"><Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#contact">Let’s talk <span aria-hidden="true">↗</span></Link></nav></header>;
}
