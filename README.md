# Victor Hernández Megía — Portfolio

A responsive, corporate-style personal portfolio in English. It presents selected engineering and research work through short case studies rather than reproducing a full CV. Built using static HTML, CSS and JavaScript; no build step or paid backend is required.

## Preview locally

1. Unzip the package.
2. Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Publish for free with GitHub Pages

1. Create a public repository called `yourusername.github.io`.
2. Upload the contents of this folder to the repository root (`index.html` must be at the root).
3. Open **Settings → Pages**, choose **Deploy from a branch**, and select `main` and `/(root)`.
4. The site will be available at `https://yourusername.github.io/` after deployment.

Official documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

## Alternative: Cloudflare Pages

Connect this folder/repository to Cloudflare Pages, leave the build command empty, set the output folder to the repository root and deploy. Official documentation: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

## Final personalisation before publishing

- Replace the IAC 2024 illustration placeholder with the real Milan conference photo. Place the image at `assets/iac-milan-photo.jpg` and replace the button with a `<figure>` containing an `<img>` and caption.
- Verify the public descriptions of projects and the destination URLs before publishing.
- The propagator / satellite pass project currently points to `https://github.com/victorhdez12/satellite-pass-predictor`.
- TripTrip is described as an AI-assisted shared travel planner built with Supabase. Its source code is private, so no private repository URL is exposed.
- Keep company project details at a non-confidential level.
- **Security before publication:** the public `satellite-pass-predictor` repository currently has Space-Track credentials in `docker-compose.yml`. Rotate the exposed credential immediately, remove hard-coded secrets from the file, use environment variables or an untracked `.env` file, and clean the Git history if needed. Do not publish or promote the repository until this has been remediated. Never copy credentials into this portfolio.
- Review your preferred contact email before making the page public.

## Editing map

- `index.html`: page copy, case studies, research links and metadata.
- `styles.css`: layout, responsive behaviour, transitions and motion.
- `script.js`: mobile navigation, accessible scroll reveals and the IAC photo placeholder dialog.
- `assets/favicon.svg`: browser icon.
- `DESIGN_PROMPT.md`: English prompt for further design iterations.


## Research preview assets
The Acta Astronautica article and Cranfield MSc thesis use embedded previews of public PDF sources. The MegaSat card uses a local crop of the supplied IAC 2024 paper's first page. The education section lists the FMVA certificate and verified Microsoft/Coursera courses in Power BI and Excel. Add the original IAC Milan photograph as `assets/iac-milan-photo.jpg` when ready.

## Security note
Never commit API keys, passwords, cookies, private URLs or employer-confidential material. Keep secrets in local environment files excluded from Git.


## Local image assets

The Acta Astronautica first-page preview and two scientific figures are bundled in `assets/` and are sourced from the supplied open-access article (CC BY 4.0). The research card uses local images so it does not depend on a browser being able to embed a remote PDF.

### Research and project images

- `assets/projects/megasat-paper-cover.png` is rendered from the supplied MegaSat conference paper.
- `assets/projects/apophis-proximity-trajectories.png` is a plot from Victor's Apophis research files.
- `assets/projects/earth-eastern-hemisphere.jpg` is public-domain Earth imagery used under a conceptual satellite-track overlay. The tracks are schematic, not computed results.
- `assets/projects/README.md` lists project-image sources.
- `assets/logos/README.md` lists logo sources and attribution.

The optional IAC conference-photo artwork is separate; add the original photo at `assets/iac-milan-photo.jpg` when available.

## Free hosting

### Recommended: GitHub Pages (fits a Git-based workflow)

1. Create a **public** GitHub repository named `victorhdez12.github.io`.
2. Upload the *contents* of this folder so `index.html`, `styles.css`, `script.js`, and `assets/` are at the repository root. Do not upload the ZIP as the only file.
3. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then choose `main` and `/ (root)`.
4. When the deployment finishes, the public site will be available at `https://victorhdez12.github.io/`.

Official guide: https://docs.github.com/en/pages/quickstart

GitHub Pages supports static HTML, CSS, JavaScript and image assets. With GitHub Free, the Pages repository must be public. The published website is publicly accessible, even if you later use a different repository arrangement, so do not commit private data, credentials, or employer-confidential material.

### Alternative: Cloudflare Pages drag-and-drop

Open the Cloudflare dashboard → **Workers & Pages** → **Create application** → **Get started** → **Drag and drop your files**, then upload this ZIP or the unzipped site folder and deploy. It provides a `*.pages.dev` address. See https://developers.cloudflare.com/pages/get-started/direct-upload/. Note that Cloudflare states a project created through Direct Upload cannot later be switched to Git integration; create a Git-integrated Pages project instead if you want deployments to update automatically from a repository.

Free static hosting is suitable for keeping the site publicly reachable without running your own computer/server. No provider can guarantee 100% uptime or that its free tier will exist forever.
