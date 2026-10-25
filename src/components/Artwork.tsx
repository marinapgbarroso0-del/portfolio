import type { Project } from "@/data/projects";

// Original CSS compositions stand in for project photography; no external images needed.
export function Artwork({ kind }: { kind: Project["artwork"] }) {
  return <div className={`artwork artwork-${kind}`} aria-hidden="true">
    {kind === "bloom" && <><div className="bloom-ring" /><div className="bloom-label"><span>GROW IN YOUR OWN WAY</span><strong>bloom<span>®</span></strong><small>A STUDY IN ORGANIC FORM</small></div><div className="art-caption">VISUAL IDENTITY / CONCEPT 01</div></>}
    {kind === "forma" && <><div className="forma-sheet"><span>AN EXPLORATION OF SPACE</span><strong>f<span>o</span>rma.</strong><div className="forma-circle" /><small>VOLUME 01 — DESIGN & CULTURE</small></div><div className="art-caption">EDITORIAL / CONCEPT 02</div></>}
    {kind === "still" && <><div className="still-circle" /><strong className="still-word">still.</strong><div className="art-caption">FINDING BEAUTY IN THE EVERYDAY</div></>}
  </div>;
}
