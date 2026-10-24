# English design prompt — Victor Hernández Megía portfolio

Act as a senior digital art director, brand designer and front-end engineer. Refine the existing static portfolio for **Victor Hernández Megía** into a premium, corporate, editorial website for an aerospace engineer and technical project manager working across space systems, mission analysis, industrial performance, MBSE, applied AI and independent software products.

## Core objective

Do not create a conventional CV website. Make it feel like a thoughtful engineering/product portfolio with concise narratives, selected case studies, visual evidence and a clear point of view. A recruiter or technical leader should understand in 30 seconds that Victor has a real aerospace and astrodynamics foundation, can lead delivery across teams, and independently builds useful software and data products.

## Art direction

- Premium aerospace / technology consulting aesthetic; restrained, precise, highly crafted, not flashy or startup-generic.
- Dark midnight navy, warm off-white, muted copper and subtle desaturated teal. Editorial typography with a strong modern sans-serif and occasional restrained serif accent.
- Use generous whitespace, asymmetrical but balanced layouts, fine rules, technical labels, grid references, elegant diagrams, map/orbit motifs and carefully designed data-like annotations.
- Prefer original SVG/CSS graphics, diagrams, and real imagery over generic stock photography. Any image should support a story: mission analysis, satellite operations, the IAC conference, or independent software projects.
- Add polished but subtle transitions: scroll-triggered fade/slide reveals, staggered project cards, gentle hover lift, animated SVG orbital paths, and smooth anchor navigation. Respect `prefers-reduced-motion`; never make motion necessary for reading or navigation.
- Responsive and fast on desktop, tablet and mobile; accessible contrast, semantic HTML, keyboard focus states and meaningful image alt text.

## Content hierarchy

1. **Hero:** a strong, non-generic line about building at the intersection of complex engineering, delivery and practical AI. No long personal summary. Include concise calls to action for selected work and contact.
2. **Point of view:** explain the through-line in Victor's work—understanding complex systems, coordinating delivery and turning repetitive work into useful tools.
3. **Selected case studies** (the heart of the site; make them visual and editorial rather than a list of responsibilities):
   - **OHB — Engineering automation and MBSE + AI:** current technical project-management work, AI-enabled AIT automation, enterprise MBSE + AI, local-first LLM/agent workflows, AI roadmap and ESA proposal support. Keep company project information high-level and non-confidential.
   - **DLR — Mission analysis and Apophis:** trajectory design, orbital dynamics, gravity/environmental perturbations, asteroid mission operations and Python-based simulation work. Connect the case study to the thesis and paper links.
   - **Orbital propagation / satellite pass prediction:** the public `victorhdez12/satellite-pass-predictor` GitHub project uses real TLE data, SGP4/Skyfield propagation, area-of-interest inputs, maps and a geospatial workflow. Link to `https://github.com/victorhdez12/satellite-pass-predictor` only after exposed credentials in the repository have been rotated and removed from the public source/history.
   - **TripTrip:** a travel-planning app Victor built to organise trips with friends. AI helps assemble the trip; Supabase supports shared data; everyone in the group can access the same plan. The source code is in a private Git repository, so describe the product without exposing or pretending to link to the private source.
   - **Airbus — Operational performance:** SQCDP, shop-floor audits, improvement action follow-up, digitalisation and CAPEX greater than €500k. Keep to concise proof points.
   - **Independent finance and AI lab:** a personal finance research environment using Python, macroeconomic data such as FRED/BLS, a local searchable knowledge base and AI-assisted workflows. Make clear this is a personal project, not investment advice or a commercial fund.
4. **Research and publications:** feature the *Acta Astronautica* paper “Modeling and control techniques for landing on (99942) Apophis: An analysis of a mission scenario” (2025), the MegaSat paper presented at IAC 2024 in Milan, the Cranfield MSc thesis on the Apophis approach and landing scenario, and academic collaborations linked to Purdue University. Include a prominent link to the full Google Scholar profile: `https://scholar.google.com/citations?user=oanEZi8AAAAJ&hl=en`. Clearly label the IAC item as presented in Milan, 14–18 October 2024, and reserve a refined image slot for the actual conference photo; do not fabricate a photograph.
5. **Career path:** display a compact, visual timeline—not a CV wall of bullets—with OHB (Apr 2026–present), Airbus Defence and Space (Nov 2025–Apr 2026), DLR (Apr 2024–Jun 2025) and Aernnova (Sep 2022–Mar 2023). Describe the kind of problems and environment each role involved, not every duty.
6. **Education and tools:** Cranfield MSc Astronautics & Space Engineering, UC3M BSc Aerospace Engineering with Purdue exchange, ongoing Physics degree at UNIR, plus core technical stack and FMVA learning where appropriate.
7. **Beyond the job title:** international study/work, the independent products, learning, fitness and outdoors—professional, understated and authentic.
8. **Contact:** clear email/LinkedIn contact and links to Google Scholar. Do not invent metrics, credentials, customers, publications, or repository URLs.

## Design and engineering requirements

- Maintain a clean information hierarchy and short copy blocks. Use case-study storytelling: challenge/context → approach → technical elements → result/learning, but do not invent quantified impact where none is documented.
- Use subtle visualisations such as an orbital trajectory illustration, a knowledge-graph diagram, a product interface schematic for TripTrip, and a restrained financial data chart. Do not use decorative charts that imply fake performance metrics.
- Make external links work, open in a new tab safely, and use descriptive anchor text. Add a clear “View all publications on Google Scholar” link.
- Keep the website static, deployable on GitHub Pages or Cloudflare Pages, and easy to maintain without a framework or paid backend.
- Include SEO title/description, Open Graph metadata, favicon, responsive navigation, print stylesheet, skip link, focus styles, reduced-motion support and a README with deployment instructions.
- Protect privacy and confidentiality. Never expose company-confidential information, personal API keys, database passwords or private repository links.

## Deliverables

Deliver working `index.html`, `styles.css`, and `script.js`, plus a README and this prompt. Check for broken links, missing images, layout overflow and accessibility issues. Do not claim that the site has been deployed; deployment is a separate user-controlled step.


## Distinctive project visual identities
Avoid repeating the same card design across projects. Give each featured case study its own visual system:
- Financial intelligence: a restrained green/teal research dashboard with macro-source tags, an illustrative time-series chart and knowledge-graph cues. Clearly label illustrative UI so it is not mistaken for live performance data.
- TripTrip: a warm map-and-itinerary product mockup showing a shared group plan, AI-assisted itinerary creation and Supabase-backed collaboration. Do not expose private source code.
- Orbital pass predictor: a technical satellite-tracking dashboard with an area-of-interest outline, ground track and TLE/SGP4 labels.
- Research: use actual first-page PDF previews from public repositories where embedding is supported, with clear links to the source. A designed cover must be labelled as a designed preview, never presented as a scan of a real paper.
- IAC MegaSat: use the original conference-paper PDF preview when supplied by the owner; until then, keep a clearly labelled designed preview.
- IAC photography: use only the real owner-provided photograph.

Make section boundaries more explicit through alternating background tones, thin chapter-color rules, whitespace and section-specific layouts. Use scroll reveals and hover transitions sparingly, with reduced-motion support.


## Latest research and asset requirements

- Treat the first-author *Acta Astronautica* paper on Apophis as the principal research credential and visually dominant publication. Use the local full first-page thumbnail `assets/acta-apophis-first-page.jpg` and the supplied-paper figure crops `assets/acta-apossum-mission-scenario.jpg` and `assets/acta-apophis-landing-trajectory.jpg`. Do not replace these with generic asteroid illustrations.
- Present the paper’s 5,000 Monte Carlo cases, 99.96% reported success rate, and 0.99 m average position error only with context explaining these are results from the study’s simulation setup and success criteria.
- Use `assets/imagen_megasat.jpg` as an intentionally replaceable local image slot for the MegaSat paper / IAC 2024 artifact. Keep the filename and path stable; the owner will replace the image locally.
- The supplied APOSSUM / Apophis T-5 poster may appear as a secondary research artifact, but must not visually compete with the Acta Astronautica feature.
- Keep the visible publication title, author order, journal volume/pages, DOI and claims consistent with the supplied PDF.
