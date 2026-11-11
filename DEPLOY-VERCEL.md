# Deploying MIRA Quest to Vercel

This project is a static HTML/CSS/JavaScript website. **There is no Vite, npm install, or build step.**

All files in this folder are the project root. You should see `index.html`, `styles.css`, `src/`, `assets/`, and `vercel.json` together.

## Vercel settings

- Framework Preset: **Other** (not Vite)
- Build Command: **empty** (disable Build Command override or explicitly leave it empty)
- Output Directory: **.** (project root)
- Install Command: **empty**
- Root Directory: the directory containing `index.html` (for this ZIP: the root of the extracted folder)

The included `vercel.json` explicitly sets these values for this deployment.

If you have already created a Vercel project configured for Vite, make sure you upload/deploy this **new ZIP**, rather than redeploying the old one. In Project Settings > Build and Deployment, change Framework Preset to Other; remove the old `vite build` command if it persists. Then redeploy.

The game uses relative asset URLs, so all `assets/` files must be uploaded alongside `index.html`.
