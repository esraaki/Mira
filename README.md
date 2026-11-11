# MIRA Quest — Interactive Space Storytelling

A playable first-draft prototype for NASA Space Apps Cairo 2026, inspired by **Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars**.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal.

## Deploy to Vercel

1. Upload the **contents of this ZIP** to the root of a new GitHub repository. (Do not upload the ZIP as a single file.)
2. In Vercel, **Add New → Project → Import Git Repository**.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. No environment variables or backend are required.

## What works

- Cinematic introduction and Moon/Mars destination hub
- Three complete, navigable story scripts (Apollo 11, Opportunity, Ingenuity)
- Branching dialogue responses and mini-interactions
- Mission completion, local progress, and final archive
- Responsive layout and keyboard support
- Original SVG spacecraft drawings; no external image dependency

## Known first-draft limitations

- Spacecraft drawings are **stylized placeholders**, not accurate technical depictions. Replace them with verified NASA media before final submission.
- Character dialogue is fictional; factual callouts should be checked against linked NASA sources before publication.
- The audio toggle is a **placeholder**. No voice files or sound effects are included yet.
- Interactions are educational abstractions, not physically accurate simulations.
- Progress is stored in browser `localStorage`, so it is device/browser-specific.

## Suggested next steps

1. Replace vector placeholders with NASA-approved photos/mission imagery and add credits.
2. Add recorded voices, subtitles/transcripts, and sound controls.
3. Review scientific facts and story phrasing against primary NASA sources.
4. Test all scenes with a child in the target age range and refine pacing.

## NASA source starting points

- https://www.nasa.gov/mission/apollo-11/
- https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/
- https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-helicopter/
- https://images.nasa.gov/

This is an independent educational prototype, not an official NASA product.
